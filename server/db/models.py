from pymongo import MongoClient
from passlib.context import CryptContext
from pydantic import BaseModel, EmailStr

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# MongoDB Connection Setup
client = MongoClient("mongodb://localhost:27017")
db = client['Resources']
users_collection = db['users']

class UserInDB(BaseModel):
    email: EmailStr
    hashed_password: str
    urls: list = []
    keywords: list = []

class User:
    @staticmethod
    def get_password_hash(password: str) -> str:
        return pwd_context.hash(password)

    @staticmethod
    def verify_password(plain_password: str, hashed_password: str) -> bool:
        return pwd_context.verify(plain_password, hashed_password)

    @staticmethod
    def find_by_email(email: str) -> UserInDB:
        user_dict = users_collection.find_one({"email": email})
        if user_dict:
            return UserInDB(**user_dict)
        return None

    @staticmethod
    def create_user(email: str, password: str) -> UserInDB:
        hashed_password = User.get_password_hash(password)
        user_dict = {
            "email": email,
            "hashed_password": hashed_password,
            "urls": [],
            "keywords": []
        }
        users_collection.insert_one(user_dict)
        return UserInDB(**user_dict)

    @staticmethod
    def update_preferences(email: str, urls: list, keywords: list) -> None:
        users_collection.update_one(
            {"email": email},
            {"$set": {"urls": urls, "keywords": keywords}}
        )
