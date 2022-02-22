INSERT INTO department (name)
VALUES 
    ("Technical"),
    ("Sale"),
    ("HR"),
    ("Finance");

INSERT INTO employee_role (title, salary, department_id)
VALUES
    ("Junior Engineer", 30000, 1),
    ("Senior Engineer", 60000, 1),
    ("Junior sale", 20000, 2),
    ("Senior sale", 30000, 2),
    ("Junior HR", 22000, 3),
    ("Senior HR", 35000, 3),
    ("Junior Finance", 27000, 4),
    ("Senior Finance", 50000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Xingzhi", "Chang", 1, NULL),
    ("Yichi", "Zhang", 2, 1),
    ("Ashley", "Rodriguez", 3, NULL),
    ("Kevin", "Tupik", 4, 3),
    ("Malia", "Brown", 5, NULL),
    ("Sarah", "Lourd", 6, NULL),
    ("Tammer", "Galal", 7, 6);