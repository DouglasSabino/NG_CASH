// CRIA TABELA Accounts
CREATE TABLE Accounts (
  id VARCHAR(30) NOT NULL PRIMARY KEY,
  balance FLOAT NOT NULL 
);

// CRIA TABELA Users
CREATE TABLE Users (
 id VARCHAR(30) NOT NULL PRIMARY KEY,
 username VARCHAR(30) UNIQUE NOT NULL,
 password VARCHAR(300) NOT NULL,
 accountId VARCHAR(30) NOT NULL,
 salt VARCHAR(300) NOT NULL,
 CONSTRAINT fk_accounts 
 FOREIGN KEY (accountId) 
 REFERENCES Accounts (id)
 ON DELETE CASCADE
 ON UPDATE CASCADE
);

// CRIA TABELA Transactions
CREATE TABLE Transactions (
  id VARCHAR(30) NOT NULL PRIMARY KEY,
  debitedAccountId VARCHAR(30) NOT NULL,
  creditedAccountId VARCHAR(30) NOT NULL,
  value FLOAT NOT NULL,
  createdAt TIMESTAMP NOT NULL,
  CONSTRAINT fk_debitedAccount 
  FOREIGN KEY (debitedAccountId) 
  REFERENCES Accounts (id),
  CONSTRAINT FK_creditedAccountId 
  FOREIGN KEY (creditedAccountId) 
  REFERENCES Accounts (id)
);
