# Student Management System

## 📌 Overview

The Student Management System is a full-stack web application built using Angular for the frontend and .NET Core Web API for the backend. It provides CRUD (Create, Read, Update, Delete) functionalities for managing student records.

## 🚀 Features

* **Add Student**: Enter student details to create a new student.
* **View Students**: Display all students in a list.
* **Edit Student**: Modify student details.
* **Delete Student**: Remove student records from the system.
* **Auto-Increment ID**: Student ID is auto-generated and hidden in the UI.
* **Two-Way Data Binding**: Ensures real-time synchronization between UI and data model.

## 🏗️ Tech Stack

### Frontend (Angular)
* Angular 16
* TypeScript
* Bootstrap
* FormsModule for two-way data binding

### Backend (.NET Core API)
* .NET 6 Web API
* Entity Framework Core (EF Core)
* MySQL / SQL Server
* Swagger for API Documentation

## 🏛️ Folder Structure


## 🛠️ Setup & Installation

### 🔹 Prerequisites

* Node.js & Angular CLI
* .NET SDK (6.0 or later)
* MySQL / SQL Server

### 🔹 Backend Setup (.NET Core API)

1. Navigate to the backend folder
   ```bash
   cd backend

📖 API Endpoints
Method	Endpoint	Description
GET	/api/students	Get all students
GET	/api/students/{id}	Get student by ID
POST	/api/students	Add a new student
PUT	/api/students/{id}	Update student
DELETE	/api/students/{id}	Delete student
