Schema Design in Relational Databases

1. What schema design is and what a database schema represents
A database schema is a blueprint or plan of how data is organized in a relational database. It defines tables, columns, data types, relationships, constraints, and keys.

Essentially, it represents how data is stored, related, and structured.

Example: In an e-commerce app, a schema might define tables like users, orders, and products with their columns and relationships.

2. Why schema design is required before writing backend code
Good schema design must come before backend code because:

It ensures the database can efficiently store and retrieve data.

It defines relationships between entities clearly (e.g., which orders belong to which users).

It prevents major changes later that can break application logic.

Example: If you store multiple orders in a users table, updating or querying orders becomes messy.

3. How poor schema design impacts data consistency, maintenance, and scalability
Poor schema design can lead to:

Data inconsistency: Duplicate or conflicting data (e.g., storing the same email in multiple tables without constraints).

Difficult maintenance: Hard to update or delete data without breaking relationships.

Limited scalability: Hard to handle large amounts of data or add new features.

Example: If orders are embedded in users table, adding thousands of orders per user can slow down queries and updates.

4. What validations are in schema design and why databases enforce them
Validations are rules applied to table columns to ensure correct and consistent data. Common validations:

NOT NULL: Column cannot be empty. Example: name in users must always exist.

UNIQUE: Column value must be unique. Example: email in users.

DEFAULT: Provides default values if none are supplied. Example: status = 'pending' for new orders.

PRIMARY KEY: Uniquely identifies each row.
Databases enforce validations to prevent invalid or duplicate data and maintain integrity.

5. Difference between a database schema and a database table

Schema: The overall blueprint of the database; includes multiple tables, relationships, and constraints.

Table: A single structure inside the schema representing one entity.

Example: users table is part of the ecommerce schema.

6. Why a table should represent only one entity
Each table should represent a single entity to maintain clarity and avoid redundant data.

Example: orders table should only store order information, not user details.

Storing multiple entities in one table makes queries complex and increases chances of errors.

7. Why redundant or derived data should be avoided in table design

Redundant data wastes space and can become inconsistent if one copy is updated but others are not.

Derived data (like storing total_price when it can be calculated from quantity * price) is better computed on the fly.

Example: Don’t store full_name if first_name and last_name already exist.

8. The importance of choosing correct data types while designing tables
Choosing the right data type ensures:

Efficient storage (e.g., INTEGER uses less space than TEXT).

Correct operations (e.g., you can sum amount but not TEXT).

Prevents errors and improves performance.

Example: email as TEXT, order_amount as INTEGER, created_at as TIMESTAMP.
