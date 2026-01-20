What is a Database Relationship?

A database relationship defines how two or more tables are connected to each other using keys (usually primary keys and foreign keys).
Relationships help maintain data integrity, avoid duplication, and allow efficient data retrieval.

Types of Database Relationships (with E-commerce Examples)
One-to-One (1:1) Relationship

Definition
One record in Table A is related to one and only one record in Table B.

🔹 Example in E-commerce

User ↔ UserProfile

Each user has exactly one profile

Each profile belongs to exactly one user

🔹 Tables
users
- user_id (PK)
- email
- password

user_profiles
- profile_id (PK)
- user_id (FK)
- address
- phone

🔹 Relationship
users.user_id → user_profiles.user_id

🔹 Use Case

Storing optional or sensitive user details separately.

2️⃣ One-to-Many (1:N) Relationship
🔹 Definition

One record in Table A can be related to many records in Table B, but each record in B relates to only one record in A.

🔹 Example in E-commerce

Customer → Orders

One customer can place many orders

Each order belongs to one customer

🔹 Tables
customers
- customer_id (PK)
- name
- email

orders
- order_id (PK)
- customer_id (FK)
- order_date
- total_amount

🔹 Relationship
customers.customer_id → orders.customer_id

🔹 Use Case

Tracking customer purchase history.

3️⃣ Many-to-One (N:1) Relationship
🔹 Definition

Multiple records in one table relate to a single record in another table
(Reverse of One-to-Many)

🔹 Example in E-commerce

Orders → Payment Method

Many orders use one payment method

Each order uses one payment method

🔹 Tables
payment_methods
- payment_id (PK)
- method_name

orders
- order_id (PK)
- payment_id (FK)

🔹 Relationship
orders.payment_id → payment_methods.payment_id

🔹 Use Case

Standardizing payment options (UPI, Card, COD).

4️⃣ Many-to-Many (M:N) Relationship
🔹 Definition

Multiple records in Table A relate to multiple records in Table B.
Implemented using a junction (bridge) table.

🔹 Example in E-commerce

Orders ↔ Products

One order can contain many products

One product can appear in many orders

🔹 Tables
products
- product_id (PK)
- name
- price

orders
- order_id (PK)
- order_date

order_items
- order_item_id (PK)
- order_id (FK)
- product_id (FK)
- quantity

🔹 Relationship
orders ↔ order_items ↔ products

🔹 Use Case

Managing cart items and order details.

🛒 E-commerce Relationship Summary Table
Relationship Type	Example
One-to-One	User ↔ User Profile
One-to-Many	Customer → Orders
Many-to-One	Orders → Payment Method
Many-to-Many	Orders ↔ Products
