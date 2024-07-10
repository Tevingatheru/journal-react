# Run Application
These instructions will guide you through setting up and running the services.

## Set up database
Install MySQL in your system.

Create a database. The expected database configurations are:
- username: root
- password:
- database name: journal

Then execute the migrate commands below from the django application.

`manage.py migrate`
`manage.py makemigrations`

# Set up a super user
Use this command to set a default super user.

``

## Run Django Backend

Activate venv python virtual environment.

Windows

`venv\Scripts\activate`

To run the Django application navigate to `journal_django_project`.
Then execute this command

`python manage.py runserver`

## Run Expo Mobile

### Prerequisites
You'll need the following tools to get started:

- Install (Expo Go)[https://expo.dev/go] on a physical device.
- Prepare for development by installing the required tools listed under (system requirements)[https://docs.expo.dev/get-started/create-a-project/].

### Run emulator

If on Windows use android studio.
Expo Orbit works on Mac.

### Run 
Navigate to `journal_fe\journal-mobile`.

Then execute the start command:

`npx expo start`

Remember to connect the application to you emulator.
