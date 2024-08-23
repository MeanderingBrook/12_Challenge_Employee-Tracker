INSERT INTO department (id, dept_name)
VALUES  (1, 'Sales'),
        (2, 'Engineering'),
        (3, 'Finance'),
        (4, 'Legal');

INSERT INTO emp_role (id, role_title, role_salary, dept_id)
VALUES  (1, 'Sales Lead', 100000, 1),
        (2, 'Salesperson', 80000, 1),
        (3, 'Lead Engineer', 150000, 2),
        (4, 'Software Engineer', 120000, 2),
        (5, 'Accounting Manager', 160000, 3),
        (6, 'Accountant', 125000, 3),
        (7, 'Legal Team Lead', 250000, 4),
        (8, 'Lawyer', 190000, 4);

INSERT INTO employee (id, emp_first_name, emp_last_name, role_id, manager_id)
VALUES  (1, John, Smith, 1, NULL),
        (2, Jane, Smith, 2, 1),
        (3, Bob, Green, 3, NULL),
        (4, Barbara, Green, 4, 3),
        (5, Tom, White, 5, NULL),
        (6, Trisha, White, 6, 5),
        (7, Karen, Baker, 7, NULL),
        (8, Kevin, Baker, 8, 7);
