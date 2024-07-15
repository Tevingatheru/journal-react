```plantuml
@startuml

title Use case

actor "journaler" as journaler

usecase "Sign up" as s
usecase "Login" as l
usecase "Login out" as lo
usecase "Update username and password" as up
usecase "Add journal entry" as add 
usecase "Edit Entry" as edit
usecase "Delete Entry" as delete
usecase "View Journal Entry" as view
usecase "View list by period" as period
left to right direction

journaler -- s
journaler -- lo
journaler -- l
journaler -- add
journaler -- edit
journaler -- delete
journaler -- view
journaler -- period
journaler -- up
@endum
```