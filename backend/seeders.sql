// SEEDS Accounts 
INSERT INTO Accounts (id, balance) VALUES ('clbmnwaru0000t888fdtt4j64', 502.87);
INSERT INTO Accounts (id, balance) VALUES ('clbmnwrz30002t8886l8tfr82', 685.53);
INSERT INTO Accounts (id, balance) VALUES ('clbmnww5v0004t888br41by9l', 258.53);

// DEFAULT PASSWORD = Senha123
// SEEDS Users
INSERT INTO Users (id, username, password, accountId, salt)
VALUES ('clbeli0ks0000qa88f09ca42q', 'Teste1', '$2b$10$dKEh1imHa976PWNm2PZHR.PqiKrqgOTTJRdVsDngyKPIU3Pt2ty7e', 'clbmnwaru0000t888fdtt4j64', '$2b$10$dKEh1imHa976PWNm2PZHR.');
INSERT INTO Users (id, username, password, accountId, salt)
VALUES ('clbjig74m1233xa356rlog1kj', 'Teste2', '$2b$10$A7Vl1VRF.KRMYzAqDTy3JOjbagChJ5fHpgajIiGkgD.j4w/oinanC', 'clbmnwrz30002t8886l8tfr82', '$2b$10$A7Vl1VRF.KRMYzAqDTy3JO');
INSERT INTO Users (id, username, password, accountId, salt)
VALUES ('clbjig57m5655cc347rkaj1kj', 'Teste3', '$2b$10$qcZ5DdnRBLkCln.ibW6ml.0l0cxW86JnQ1n5se8GCUucSay5jlOmC', 'clbmnww5v0004t888br41by9l', '$2b$10$qcZ5DdnRBLkCln.ibW6ml.');

// SEEDS Transactions 
INSERT INTO Transactions (id, debitedAccountId, creditedAccountId, value, createdAt)
VALUES ( 'clbjig57f8587be947ghjj1kj', 'clbmnwaru0000t888fdtt4j64', 'clbmnww5v0004t888br41by9l', 589.55, NOW());
INSERT INTO Transactions (id, debitedAccountId, creditedAccountId, value, createdAt)
VALUES ( 'clbjig93d8587be9GR5hjj1kj', 'clbmnwrz30002t8886l8tfr82', 'clbmnwaru0000t888fdtt4j64', 25, NOW());