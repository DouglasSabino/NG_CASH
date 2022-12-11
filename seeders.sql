// SEEDS Accounts 
INSERT INTO Accounts (id, balance) VALUES ('clbelik4q0087t788a5337juy', 1200.87);
INSERT INTO Accounts (id, balance) VALUES ('clbelik4q1155t788a5587sou', 1600.53);
INSERT INTO Accounts (id, balance) VALUES ('clbelik4q1789t788a5268poq', 1700);

// SEEDS Users
INSERT INTO Users (id, username, password, accountId, salt)
VALUES ('clbeli0ks0000qa88f09ca42q', 'Teste1', 'Senha123', 'clbelik4q0087t788a5337juy', 'ssdfs582');
INSERT INTO Users (id, username, password, accountId, salt)
VALUES ('clbjig74m1233xa356rlog1kj', 'Teste2', 'Senha123', 'clbelik4q1155t788a5587sou', 'ssdfs457');
INSERT INTO Users (id, username, password, accountId, salt)
VALUES ('clbjig57m5655cc347rkaj1kj', 'Teste3', 'Senha123', 'clbelik4q1789t788a5268poq', 'ssdfs657');

// SEEDS Transactions 
INSERT INTO Transactions (id, debitedAccountId, creditedAccountId, value, createdAt)
VALUES ( 'clbjig57f8587be947ghjj1kj', 'clbelik4q0087t788a5337juy', 'clbelik4q1789t788a5268poq', 589.55, NOW());
INSERT INTO Transactions (id, debitedAccountId, creditedAccountId, value, createdAt)
VALUES ( 'clbjig93d8587be9GR5hjj1kj', 'clbelik4q1155t788a5587sou', 'clbelik4q0087t788a5337juy', 25, NOW());