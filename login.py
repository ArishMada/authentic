from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine

# Database URL setups
# Create Database URL and Engine for user table
USER_DATABASE_URL = "sqlite:///user.db"
user_engine = create_engine(USER_DATABASE_URL)
UserBase = declarative_base(bind=user_engine)

# Create DB URL and Engine for UserActivity table
ACTIVITY_DATABASE_URL = "sqlite:///activity.db"
activity_engine = create_engine(ACTIVITY_DATABASE_URL)
ActivityBase = declarative_base(bind=activity_engine)


# Table Models
# User table model
class User(UserBase):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True, nullable=False)
    password = Column(String, unique=False, nullable=False)


# User activity table model
class UserActivity(ActivityBase):
    __tablename__ = "user_activity"

    user_id = Column(String, index=True)
    activity_type = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now())


# In the user database, create User table
UserBase.metadata.create_all(bind=user_engine)

# In the activity database, create User Activity table
ActivityBase.metadata.create_all(bind=activity_engine)

# Session - User Database
UserSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=user_engine)

# Session - User Activity Database
ActivitySessionLocal = sessionmaker(
    autocommit=False, autoflush=False, bind=activity_engine
)


# Get DB
def get_user_db():
    db = UserSessionLocal()
    try:
        yield db
    finally:
        db.close()


def get_activity_db():
    db = ActivitySessionLocal()
    try:
        yield db
    finally:
        db.close()


# Create tables ()
def create_tables():
    UserBase.metadata.create_all(bind=user_engine)
    ActivityBase.metadata.create_all(bind=activity_engine)


def create_new_account(email, password):
    with get_user_db() as db:
        existing_user = db.query(User).filter_by(email=email).first()
        if existing_user:
            print("Email is already registered.")
        else:
            new_user = User(email=email, password=password)
            db.add(new_user)
            db.commit()
            print("Account created successfully!")
