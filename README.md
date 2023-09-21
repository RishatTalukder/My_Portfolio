# My_Portfolio

This is my first Attemp to make a portfolio website. I've never Done something like this and I'm Hoping to make a good design using `Tailwind` or `BootStrap`. For _BackEnd_ I'll use <code><bold>Djnago</bold></code>.

**so lets go!!!**

# Backend

We can divide this into two parts:

1. Bootstrap/Tailwind(FrontEnd)
2. Django(BackEnd)

We will not start from design but from the BackEnd. So lets start with Django. Because as i've learned that

> When you know what you are working with you will know how to design that.

SO, Django Backend is the feature of the project and we will start with that.

## Django Installation

So, to work with django and python we need to install python first. So, lets install python first:

- [Python](https://www.python.org/downloads/) (go to this link and download the latest version of python)

- I'm using `python 3.11.5`

After installing python we need to make a `virtual environment` for our project, so lets do that.

> A `virtual environment` is a tool that helps to keep dependencies required by different projects separate by creating isolated python virtual environments for them. This is one of the most important tools that most of the Python developers use.

So, open Your terminal and type:

- <code>python -m venv <bold>environment_name</bold></code>(replace `environment_name` with your environment name)

- I named my environment `py_env`.

Now, You'll see a folder was created automatically with the name you gave your environment. There are THousands of files inside that folder. You Don't need to worry about that.

Now, we need to `Activate` our environment. So, type:

- `environment_name\Scripts\activate` (replace `environment_name` with your environment name)

For exapmle: `py_env\Scripts\activate`

Now everything you install with `pip` will be installed in this environment and not in your global environment.

Now, we need to install `Django` in our environment. So, type:

- `pip install django`

Django will be installed in your environment. Im using `Django 4.2.5`.

You can check your django version by typing, `python -m django --version`.

Now, our environment is setup and we can start our project.

## Djnago Project Setup

Step 1: Make a directory for your project. I named my directory `My_Portfolio` and cut the `enviroment` folder and paste it in `My_Portfolio` directory.

Step 2: Open the directory in your terminal and type:

- `django-admin startproject <project_name> .` (replace `project_name` with your project name)

for example: `django-admin startproject portfolio .`

> `django-admin` is Django’s command-line utility for administrative tasks.

> `startproject` is a command that creates a folder with the name you gave and some files inside that folder, that are necessary for a django project.

> Note: The `.` at the end of the command is important. It tells the startproject command to install Django in your current directory.

After the command is executed you will see a folder named after the project name you gave. In my case it is `portfolio` and a python file named `manage.py`.

> `manage.py` is the most important file in a django project. Its used to do almost everything in a django project. SO, Don't edit or modify it ever.

Now, lets get to now the files and folders inside the `portfolio` folder.

Here, the portfolio folder is the `root` directory of our project. i'll call it `root` to avoid any confusion. It contains the following files and folders:

```
|-- root
|   |-- __init__.py
|   |-- asgi.py
|   |-- settings.py
|   |-- urls.py
|   |-- wsgi.py
```

- `__init__.py` is an empty file that tells python that this directory is a python package.

- `asgi.py` is the entry point for ASGI-compatible web servers to serve your project.

- `settings.py` is the file where you will store all the configuration for your project.

- `urls.py` is the file where you will store all the urls of your project.

- `wsgi.py` is the entry point for WSGI-compatible web servers to serve your project.

Now, lets run our project and see if everything is working fine. So, in the terminal, type:

- `python manage.py runserver` (this will run your project in your local server)

You see something like this:

- in the terminal:
  <img src="images_and_stuff/django_server.PNG"
       alt="Markdown Monster icon"
       style="float: left; margin-right: 10px;" />

- Copy the link and paste it in your browser. You will see something like this in the browser:
  <img src="images_and_stuff/django_starting_page.PNG"
       alt="Markdown Monster icon"
       style="float: left; margin-right: 10px;" />

So if you see this, then your project is running fine. Now, lets stop the server by pressing `ctrl+c` in the terminal.

We made our project and now we need to make an app for our project. So, lets do that.

# Creating an App

Before making an app we need to know what we want to add in our project by that app.

As, this is a portfolio website, you need to add your `projects`, `skills`, `about` and `contact` information. So, we will make an app for each of them, Most importantly We need a Home page for our website. which is the First task to complete in any website. So,lets make an app for that.

SO, open up your terminal and type:

- `python manage.py startapp <app_name>` (replace `app_name` with your app name)

- i'll name my app `main`.

> `startapp` is a command that creates a folder with the name you gave and some files inside that folder, that are necessary for an app.

As the command is executed you will see a folder named after the app name you gave. In my case it is `main` and some files inside that folder.

Now, lets get to now the files and folders inside the `main` folder.

```
|-- main
|    |-- migrations
|    |    |-- __init__.py
|    |-- __init__.py
|    |-- admin.py
|    |-- apps.py
|    |-- models.py
|    |-- tests.py
|    |-- views.py

```

- `migrations` is a folder that contains all the migrations of your app.

- `__init__.py` is an empty file that tells python that this directory is a python package.

- `admin.py` is the file where you will register your models to the admin site.

- `apps.py` is the file where you will store all the configuration for your app.

- `models.py` is the file where you will store all the database models of your app.

- `tests.py` is the file where you will store all the tests of your app.

- `views.py` is the file where you will store all the views of your app.

Now, lets run our project and see if everything is working fine. So, run the server(`python manage.py runserver`) and copy the link and paste it in your browser. If you see the same page as before, then everything is working fine.

> You don't need to stop the server now. It will be running until you stop it or if you close the terminal or there is an error in your code.

Now, lets add our app to our project. Open the `settings.py` file in your root directory and find the `INSTALLED_APPS` list. Add your app name in the list. In my case it is `main`.

```python

INSTALLED_APPS = [
    'main',
    'django.contrib.admin',
    ...
]

```

Now, lets add the first `view` of our project.

> `Views` are the functions that take a `web request` and return a `web response`.

## Adding a View

### The Easy Way

Open the `views.py` file in your app directory and add the following code:

```python
from django.shortcuts import render
from django.http import HttpResponse # add

def home(request): # add
    return HttpResponse("Hello World") # add
```

> `render` is a function that takes a `request` and a `template` name and returns a `response` with that `template`.

> `HttpResponse` is a function that takes a `string` and returns a `response` with that `string`.

In the function `home` we are returning a `response` with the string `Hello World` using the `HttpResponse` function we imported.

Now, if you look at our terminal, you will see that it is running but if you go to the link we copied and paste it in our browser, you might not see the `Hello World` string.

Because we haven't added the `url` of our `view` to our `project urls`.

If you remember, when we created the root directory of our project, we got a file named `urls.py`. `urls.py` is the file that contains all the `URL Paths` of our project. So, lets add our `view` url to our `root urls`.

Open the `<root>/urls.py` file in your root directory and add the following code:

```python
from django.contrib import admin
from django.urls import path

from main import views # add

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'), # add
]
```

> i imported the `views` from my `main` app.

> `path` is a function that takes a `url path`, a `view` and a `name` and returns a `url path` with that `view` and `name`.

> `name` is the string that we will use to call the `url path` in our `templates`.

So, we just imported the view from our app and added it to our `root urls` with the `url path` `''` and the `name` `home` inside the `urlpatterns` list.

now just restart the server and go to the link and you will see the `Hello World` string.

> Before connecting the view to the `''` path the global django template was showing. Now, we are returning a `response` with the `Hello World` string. So, the global django template is not showing anymore.

This is one way to add a `view` in our website but we will not be using this method because the `urlpath` can become very long and messy. So, we will be using `include` to add our `views` to our `root urls`.

### The Better Way

first lets go to our `main app` and create a file named `urls.py` and add the following code:

```python
+ from django.urls import path #add
+ from . import views #add

+ urlpatterns = [ #add
+    path('', views.home, name='home'), #add
+]
```

> As we are in the `main app` we don't need to import the `views` from the `main` app. We can just import it from the current directory. So, we used `from . import views`.

> all the other things are same as the `root urls`. we didn't add the `admin` url because we don't need it in our `main app`.

Now we can add our `main app urls` to our `root urls`. So, open the `<root>/urls.py` file in your root directory and add the following code:

```python
from django.contrib import admin
from django.urls import path, include # add
# from main import views #

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls')), # add
    #path('', views.home, name='home'),
]
```

> `include` is a function that takes a `url path` and a `app urls` and returns a `url path` with that `app urls`.

> `main.urls` is the `urls.py` file we created in our `main app` and `include` will add all the `url paths` of that file to our `root urls`.

I removed the `views` import because we don't need it anymore. We are using `include` to add our `main app urls` to our `root urls`.

So if you did all that accordingly, when you go to the link we will see the `Hello World` string.

Now, lets test the `urls path` we created. So, in the `main app urls` add the following code:

```python

...
urlpatterns = [
    path('home/', views.home, name='home'),
]
```

> don't forget to add `"/"` after `home` in the `url path`. might cause some nasty errors

> just changed the `url path` from `''` to `'home'`.

Now, when you reload your browser you will see an error. Because we changed the `url path`. But no need to panic.

> `Django` is smart enough to tell you what the error is. So, read the error carefully and you will know what to do.

So, the error is saying that the `page not found`. Because we changed the page's url path. Before, it was `''` which refered the local host address(in my case it was `http://127.0.0.1:8000/`)

But as we changed the `url path` to `home` it is now `http://127.0.0.1:8000/home/`.

> so every path referes to the `LocalHostAddress/<path>`.

Now, In the Browser type in the path after the `LocalHostAddress` and you will see the `Hello World` string.

for example: in my case it is `http://127.0.0.1:8000/home/`

You will see the `Hello World` string.

So, As we are done with how to add a `view` to our project and how to add `url paths` to our `root urls` we can move on to the next step. Before lets reset the url path to `''` in the `main app urls`.

```python
...
urlpatterns = [
    path('', views.home, name='home'),
]
```

## Adding a Template

### making the Home Page

By adding a template i mean we will add a `html` file to our project and we will render that `html` file using in views.

So, we will start by creating a folder named `templates` in our `main app` and inside that folder we will create another folder named `main` and inside that folder we will create a `html` file named `home.html`.

So, the directory structure will look like this:

```
|-- main
|    |-- migrations
|    |    |-- __init__.py
|
|    |-- templates
|    |    |-- main
|    |    |    |-- home.html
|
|    |-- __init__.py
|    |-- admin.py
|    |-- apps.py
|    |-- models.py
|    |-- tests.py
|    |-- views.py

```

> Make sure the name `templates` is correct. If you misspell it, it will not work.

I know this is a little bit confusing but this is how django works. You will get used to it, as we go on.

So now, lets add some code to our `home.html` file.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

Now, lets render this `html` file in our `home` view. So, open the `views.py` file in your app directory and add the following code:

```python
def home(request):
    #return HttpResponse("Hello World")
    return render(request, 'main/home.html') # add
```

> `render` is a function that takes a `request` and a `template` name and returns a `response` with that `template`.

> here we are returning a `response` with the `home.html` template by giving the `template` path `main/home.html`. I didn't add the `templates` folder name because django will automatically look for the `templates` folder in the `main app`.

Now, if you reload your browser you will see the `Hello World` string. But this time it is coming from the `home.html` template.

I think it was easy to add and render a `template` in our `view` and we will be doing this a lot in our project.

I dont like the `Hello World` string. So, lets change it to something else.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Home page</h1>
    <!-- changed to home -->
  </body>
</html>
```

So, as we made our first template view and render our first web page, we can now follow the same steps to add another `view` and `template`.

### Adding the About Page

So, lets add another `view` and `template` for our `about` page.

In the `main/templates/main` folder create a `html` file named `about.html` and add the following code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>About</h1>
  </body>
</html>
```

Now, lets add a `view` for our `about` page. So, open the `views.py` file in your app directory and add the following code:

```python
...
def home(request):
    return render(request, 'main/home.html')

def about(request):
    return render(request, 'main/about.html')
```

Now, lets add the `url path` for our `about` page. So, open the `main/urls.py` file in your app directory and add the following code:

```python
...
urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'), # add
]
```

Now, if you reload your browser and go to the `localhost/about` page you will see the `About page`.

SOOOOOOOO, The steps of adding a `view` and `template` are:

1. Create a `html` file in the `templates` folder.
2. Add a `view` in the `views.py` file.
3. Add a `url path` in the `urls.py` file.

We will follow these steps to render any page in our project.

Now lets make it a little bit more interesting. Lets add a `navbar` to our project.

## Adding a Navbar

Adding a `navbar` is very easy. We just need to add some `html` code to our `Home.html` file. So, lets do that.

```html
<body>
  <!-- navbar without css !-->
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Skills</a>
    <a href="#">Projects</a>
  </nav>
  <h1>Home page</h1>
</body>
```

Now, if you reload your browser you will see the `navbar` in the top of the page. But it is not looking good. But again there is a problem.

**WE NEED TO ADD THE SAME `NAVBAR` TO EVERY PAGE OF OUR PROJECT.**

Thats a very annoying thing to do. So, we need to find a way to add the `navbar` to every page of our project without adding it to every page.

**There is a solution to this problem.**

It is called **`TEMPLATE INHERITANCE`**.

### Template Inheritance

Template inheritance is a very useful feature of Django that allows you to build a base “skeleton” template that contains all the common elements of your site and defines blocks that child templates can override.

So, here the `navbar` is the common element. So, we will make a html file that will contain the `navbar` and we will extend that file in every page of our project.

#### Making the Base Template

To do that lets make a directory name `templates` in our project directory and inside that folder we will make a file named `base.html` which will contain the navbar.

The file structure will look like this:

```
path/to/the/project
|-- main
|-- portfolio(root directory)
|-- templates
|    |-- base.html
```

> the templates folder is in my `project directorty` or the `base directory`, Not in main or root directory.

Now, lets add the `navbar` to our `base.html` file.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- navbar without styling-->
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Skills</a>
      <a href="#">Projects</a>
    </nav>
  </body>
</html>
```

> Here is the navbar we made before in home.html.

> `href="#"` is used to tell the browser to stay on the same page. Because we don't have any other pages yet.

Now, we need to tell django that this is the `base` template.

#### Adding the Base Template

So, open the `settings.py` file in your root directory and find the `TEMPLATES` variable and add the following code:

```python
...
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'], # add
        'APP_DIRS': True,
        ...
    },
]
...
```

> `DIRS` is a list of directories where django will look for the templates.

> restarting the server might be needed because we are editing directly in the `settings.py`.

Now, lets extend the `base.html` file in our `home.html` file. So, open the `home.html` file in your `main/templates/main` directory, remove everything and add the following code:

```html
{% extends 'base.html' %}
```

> `{% extends 'base.html' %}` is used to tell django that this is the `base` template.

Now, if you reload your browser you will see the `navbar` in the top of the page.

But this time it is coming from the `base.html` template.

we can add this to the `about.html` file.

```html
{% extends 'base.html' %}
```

now, if we go to the about page we will see the `navbar` in the top of the page.

So, we have added the `navbar` to every page of our project.

but if we add some more code inside the `home.html` file we will see the `navbar` in the top of the page but nothing else.

lets, do some experiments.

```html
{% extends 'base.html' %}

<h1>HOME PAGE</h1>
<!-- add -->
```

Now if we reload our browser we will see the `navbar` in the top of the page but the `h1` tag is not there.

#### why is this happening?

Because we are extending the `base.html` template.
When the extends tag is used django identifies the `base.html` as the parent template and the `home.html` as the child template.

This means the `home.html` is a part of the `base.html` template.

When i wrote the `h1` tag inside the `home.html` it was outside the `base.html` template.

So, we need to add the `h1` tag inside the `base.html` template.

**How can we do that?**

lets modify the `base.html` file.

```html
...
<body>
  <!-- navbar without stling-->
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Skills</a>
    <a href="#">Projects</a>
  </nav>
  <!-- add -->
  <div>
    {% block content %}
    <!-- content goes here -->
    {% endblock content %}
  </div>
</body>
...
```

> `{% block content %}{% endblock content %}` is used to tell django that this is the `block` of the `base.html` template.

> `block` is a django template tag that is used to define a `block` in a template.

> `content` is the name of the `block`.

> `block` is used to define a `block` in a template and `endblock` is used to end the `block`.

I just added a `div` tag. Inside the `div` tag I added the `{% block content %}{% endblock content %}` tag.

now, lets go to the `home.html` file and add the following code:

```html
{% extends 'base.html' %}

<!-- content of the home page -->
{% block content %}
<h1>HOME PAGE</h1>
{% endblock content %}
```

> here in the `home.html` `{% block content %}{% endblock content %}` is used to tell django that this is the `block` of the `home.html` template.

After adding the `block` in the `home.html` file, if we reload our browser we will see the `navbar` in the top of the page and the `h1` in the page.

Now, lets do the same for the about page.

```django
{% extends 'base.html' %}
<!-- content of the about page -->
{% block content %}
<h1>About</h1>
{% endblock content %}
```

with that we have added the `navbar` to every page of our project and we have learned how to use `template inheritance`.

## Recap

Lets recap what we did:

- We made a `virtual environment` for our project.
- We installed `Django` in our `virtual environment`.
- We made a `Django` project.
- We made a `Django` app.
- We added a `view` to our project.
- We added a `template` to our project.
- We added a `url path` to our project.
- We added a `navbar` to our project.
- We learned about `template inheritance`.

# Database

As this is a portfolio website we need to add some information about our `projects`, `skills`, `about` and `contact` information. So, we need a database to store those information.

In django we can use any database we want. But for this project we will be using `sqlite3` database. Because it is the default database of django and it is very easy to use.

Djnago uses `ORM` to interact with the database. `ORM` stands for `Object Relational Mapper`. It is a technique that lets you query and manipulate data from a database using an object-oriented paradigm.

So, lets start by adding a `model` to our project.

## Adding a Model

> A `model` is a class that represents a table in the database. Each attribute of the class represents a field in the table.

So, lets add a `model` to our project. So, open the `models.py` file in your `main app` directory and you will see:

```python
from django.db import models

# Create your models here.
```

> `from django.db import models` is used to import the `models` module from the `django.db` package. It is used to interact with the database.

We will create our database tables in this file and it will be rendered in the database.

But first we need to know what we want to add in our database.

So, in my portfolio i want my youtube videos to be displayed and my github repositories to be displayed. So, we will add a `model` for each of them.

So, Lets start with the `youtube model`. in the `main/models.py` file add the following code:

```python
from django.db import models

# Create your models here.

class Youtube(models.Model):  #add
    url = models.CharField(max_length=200) #add
    title = models.CharField(max_length=100) #add
    description = models.TextField() #add
    video_id = models.CharField(max_length=100) #add
    thumbnail = models.ImageField(upload_to='images') #add
    created_at = models.DateTimeField(auto_now_add=True) #add

    def __str__(self):
        return self.title

```

> `models.Model` is the base class of all the models. It is used to create a model.

Lets break down what I did here:

- I imported the `models` module from the `django.db` package.
- I created a class named `Youtube` that inherits from the `models.Model` class.
- I added some attributes to the class. Each attribute represents a field in the database table.

  - `url` is a `CharField` that can store a string with a maximum length of 200 characters.
  - `title` is a `CharField` that can store a string with a maximum length of 100 characters.
  - `description` is a `TextField` that can store a string with a maximum length of 100 characters.
  - `video_id` is a `CharField` that can store a string with a maximum length of 100 characters.
  - `thumbnail` is a `ImageField` that can store an image. `upload_to` is used to tell django where to store the image. In this case it is the `images` folder.
  - `created_at` is a `DateTimeField` that can store a date and time. `auto_now_add` is used to automatically add the current date and time when a new object is created.

- I added a `__str__` method to the class. It is used to return a string representation of the object. In this case it will return the `title` of the object.

If you did everything correctly, We can now migrate our database.

## Migrating the Database

> `Migrations` are Django’s way of propagating changes you make to your models (adding a field, deleting a model, etc.) into your database schema.

So, lets migrate our database. So, open your terminal and type:

- `python manage.py makemigrations` (this will create a migration file)

> remember to activate your `virtual environment` before running the command.

After running the command you might see this in yours terminal:
<img src="images_and_stuff/pillow_error.PNG"
       alt="Markdown Monster icon"
       style="float: left; margin-right: 10px;" />

If you get a error like this just copy the command from the last line of the terminal `python -m pip install Pillow` and paste it in the terminal then run it. It will install the `Pillow` package.

> `Pillow` is a python package that is used to handle images in django. We will be using it to handle the `thumbnail` field. because it is a image field.

Now, lets run the `makemigrations` command again. So, type:

- `python manage.py makemigrations` again.

Hopefully, there will be no errors this time and you will see something like this in your terminal:

<img src="images_and_stuff/makemigration_successful.PNG"
       alt="Markdown Monster icon"
       style="float: left; margin-right: 10px;" />

if you see this, then everything is working fine and we migrated our model to our database.

Now, lets migrate our database. So, type:

- `python manage.py migrate` (this will migrate our model to our database)

![migration_in_the_terminal](images_and_stuff/migrate_successful.PNG)

If your migration is successful you can add data to your database.

## Adding Data to the Database

There are some ways to add data to the database. We will be using the **Common Way**.

but fist we need to add a `superuser` to our project. So, in the terminal type:

- `python manage.py createsuperuser` (this will promt you to create a superuser)

> `superuser` is a user that has all the permissions to do anything in the project.

After running the command you will see something like this in your terminal:
![createsuperuser](images_and_stuff/superuser_promt.PNG)

- `Username` is the username of the superuser. You can give any username you want.
- `Email address` is the email address of the superuser. You can give any email address you want.
- `Password` is the password of the superuser. You can give any password you want.(you will not see the password when you type it and the password will be hidden)

> fill all the fields carefully. You will need the username and password to login to the admin site.

After you see the `Superuser created successfully.` message in your terminal, you can now add data to your database.

### The Common Way

To add data to the database we need to login to the admin site. So, go to the `localhost/admin` page and login with the username and password you gave when you created the superuser.

After you login you will see something like this:
![admin_site](images_and_stuff/admin_panal.PNG)

> explore the admin site. It is very easy to use.

There is a problem, we can't see the `Youtube` model in the admin site. So, we need to register the `Youtube` model to the admin site.

#### Registering the Model to the Admin Site

To register the `Youtube` model to the admin site, open the `admin.py` file in your `main app` directory and add the following code:

```python
from django.contrib import admin
from .models import Youtube # add

# Register your models here.
admin.site.register(Youtube) # add
```

> `from .models import Youtube` is used to import the `Youtube` model from the `models.py` file.

> `admin.site.register(Youtube)` is used to register the `Youtube` model to the admin site.

Now, if you reload the admin site you will see the `Youtube` model.

> you might need to restart the server.

Now, lets add some data to the database. So, click on the `Youtube` model and you will see all the fields of the model except the `created_at` field. because it is automatically added when a new object is created.

I'll fill the fields with my youtube video information. You can aslo fill it with these informations.

- `url` : `https://youtu.be/-Gi9KGRsFOc`
- `title` : `Full Python Tutorial for Beginners`
- `description` : `Learn full python tutorial from scratch for beginners. This course includes python basics, data types, control flow, functions, modules, OOP, GUI, Django, Flask, Tkinter and much more.`
- `video_id` : `5qap5aO4i9A`
- `thumbnail` :
  ![thumbnail](images_and_stuff/maxresdefault.webp)

After adding the data click on the `save` button and you will see the data in the database.

After saving you will see there is a new folder named `images` in your project directory. It is created by the `upload_to` attribute of the `thumbnail` field. Inside the `Youtube` folder there is the thumbnail image we uploaded.

And thats how we can add data to our database.

Now, its time to fetch the data from the database and display it in our website.

## Fetching Data from the Database

To fetch data from the database we need to use `views`. We will fetch the data in our `home` view and display it in our `home.html` template.
So, lets go to the `main/views.py` file and add the following code:

```python
from .models import Youtube # add
...
def home(request):
    videos = Youtube.objects.all() # add
    context = {'videos': videos} # add
    return render(request, 'main/home.html', context) # add
...
```

> `Youtube.objects.all()` is used to fetch all the objects from the `Youtube` model.

> `context` is a dictionary that contains all the data that we want to pass to the template. the key of the dictionary is the name that we will use in the `home.html` and the value is the data itself.

> we will pass the `context` as the third argument of the `render` function. that will give the `home.html` access to the data.

So, we have fetched the data from the database and made a `context` dictionary that contains the data.
Now, lets display it in our `home.html` template.

So, open the `main/templates/main/home.html` file and add the following code:

```django
{% extends 'base.html' %}

<!-- Page content goes here -->
{% block content %}
  <h1>HOME PAGE</h1>

  <!-- displaying the videos -->
  {% for video in videos %}
    <div>
      <a href="{{ video.url }}"><img src="{{ video.thumbnail.url }}" alt="{{ video.title }}" /></a>
      <!-- title -->
      <h2>{{ video.title }}</h2>
      <!-- description -->
      <p>{{ video.description }}</p>
      <!-- thumbnail -->
    </div>
  {% endfor %}
{% endblock %}
```

> `{% for video in videos %}{% endfor %}` is used to loop through the `videos` list. Everything inside the `for` loop will be repeated for every object in the `videos` list.

> > `videos` is the name of the `videos` list we got from the `context` dictionary delivered by the `home` view.

> `{{ video.url }}` is used to display the `url` of the video.

> `{{ video.thumbnail.url }}` is used to display the `url` of the thumbnail image. `url` is used to get the `url` or the `path` of the image. in this case the path is `images/maxresdefault.webp`.

> `{{ video.title }}` is used to display the `title` of the video.

> `{{ video.description }}` is used to display the `description` of the video.

Now, if you reload the server and go to the `localhost/home` page you will see the video information we added in the database, including the title, description and the url.

**But the thumbnail is not showing!!!!**

This is because we haven't informed django that we are using images in our project. So, we need to add some code to our `settings.py` file.

## ADDING MEDIA FILES

> `Media files` are the files that are uploaded by the user. In our case it is the thumbnail image.

We need to specify thhe media directory in our `settings.py` file. So, open the `settings.py` file in your root directory and add the following code:

```python
...
MEDIA_ROOT = BASE_DIR / 'media' # add
MEDIA_URL = '/media/' # add
...
```

> `MEDIA_ROOT` is used to specify the media directory. In this case it is the `media` folder in the `base directory`.

> `MEDIA_URL` is used to specify the `url` of the media directory. In this case it is `localhost/media/`.

I added this in the end of the `settings.py` file. You can add it anywhere you want. But make sure you add it in the `settings.py` file.

So, Lets break it down:

- `MEDIA_ROOT` is the absolute path to the media directory. It is the path where the media files will be stored.

- `MEDIA_URL` is the relative path to the media directory. It is the path that will be used to access the media files.

So, We specified the where `django` will store the media files and the `url` of the media directory. Now lets fix the thumbnail problem.

lets go to the admin panel and remove the thumbnail image and add it again. After adding the image click on the `save` button and you will see the image in the `media` folder.

There will be a new folder named `media` in your project directory. Inside the `media` folder there will be a `image` folder. Inside the `image` folder there will be the thumbnail image we uploaded.

Now lets reload the server and go to the `localhost/home` page and It didn't work 😥

Im a very bad programmer. How can i make such a mistake.😞 I can't even make a simple portfolio website.😣

**But wait a minute.**

NOOOOOOO!!!! I'll not give up

Lets try to fix this problem.

> So, the problem is that django does not know serve the media files when we are in the development server. So, we need to add some code to our `urls.py` files to serve the media files.

Now we know what the problem is. Lets fix it.

So, open the `urls.py` file in your root directory and add the following code:

```python
...
from django.conf import settings # add
from django.conf.urls.static import static # add

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
]

if settings.DEBUG: # add
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) # add
```

> `from django.conf import settings` is used to import the `settings` module from the `django.conf` package, this refers to the `settings.py` file.

> `from django.conf.urls.static import static` is used to import the `static` function from the `django.conf.urls.static` module.

> `urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)` is used to add the `media` url and the `media` root to the `urlpatterns` list.

lets Break it down:

- `settings.DEBUG` is used to check if the `DEBUG` mode is on or not. `DEBUG` mode is used to check if the project is in development mode or not. If it is in development mode then `DEBUG` mode is on.

- Django does not serve the media files when the `DEBUG` mode is on. So, we need to add the `media` url and the `media` root to the `urlpatterns` list.

- So, we added the `media` url and the `media` root to the `urlpatterns` list by using the `static` function.

> Static function takes two arguments. The first argument is the `url` of the media directory and the second argument is the `absolute path` of the media directory and returns a `url path` with the `media` url and the `media` root.

Now if you did all this correctly, you will see the thumbnail image in the `localhost/home` page when you reload the server.

I see a huge improvement in my programming skills. I can't believe i fixed the problem.😁

I also see a huge ass picture and if i click the picture it redirects me to the video in Yotube.

Well, that was a win!!

Now, that we can add and `load` data from database. Lets make another table will have My `github repo` link.


<!-- part 2 -->

## Adding Github Repo Link

Lets make another table to store the `github repo` link. So, open the `main/models.py` file in your `main app` directory and add the following code:

```python
...
class Github(models.Model): # add
    url = models.CharField(max_length=200)
    title = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
...
```

> You need to `migrate` a `model` every time you make a new one or change something in the model.

So. lets migrate the `Github` model.

In the terminal type:

- `python manage.py makemigrations` and `python manage.py migrate`

Register the model in the `admin.py` file.

```python

from .models import Github

admin.site.register(Github)
...
```

Lets go to the `localhost/admin` page to add the github repo link.

So, click on the `Github` model and you will see all the fields of the model except the `created_at` field. Lets add new:

- `url` : `https://github.com/RishatTalukder/My_Portfolio`
- `title` : `My_Portfolio`
- `description` : `This is my first Attemp ttomake a portfolio website`

After adding the data click on the `save` button and you will see the data in the database.

So, Now we can add this to the `home.html` template, after proccess this in the `views.py` file.

Go to the `main/views.py` file and add the following code:

```python
...
def home(request):
    videos = Youtube.objects.all()
    repos = Github.objects.all() # add
    context = {
        'videos': videos,
        'repos': repos #add
    }
    return render(request, 'main/home.html', context)
...
```

> `Github.objects.all()` is used to fetch all the objects from the `Github` model.

> all the objects from the `Github` model are stored in the `repos` variable.

So, in the home view we fetched the `videos` and the `repos` from the database and passed them to the `context` dictionary.

Lets make some modifications in the `home.html` template.

```django
{% extends 'base.html' %}

<!-- Page content goes here -->
{% block content %}
  <h1>HOME PAGE</h1>

  <div> <!-- videos section-->
    {% for video in videos %}
      <div> 
        <a href="{{ video.url }}"><img src="{{ video.thumbnail.url }}" alt="{{ video.title }}" /></a>
        <!-- title -->
        <h2>{{ video.title }}</h2>
        <!-- description -->
        <p>{{ video.description }}</p>
        <!-- thumbnail -->
      </div>
    {% endfor %}
  </div>
  <div> <!-- repos section-->
    {% for repo in repos %}
      <div>
        <a href="{{ repo.url }}"><h2>{{ repo.title }}</h2></a> <!-- link of the repository -->
        <p>{{ repo.description }}</p>
      </div>
    {% endfor %}
  </div>
{% endblock %}
```

> `for repo in repos` is used to loop through the `repos` list. Everything inside the `for` loop will be repeated for every object in the `repos` list.

> `for video in videos` is used to loop through the `videos` list. Everything inside the `for` loop will be repeated for every object in the `videos` list.

We added a new section to the `home.html` template. `Repos Section`

In that section we display the `repos` list, where we display the `title`, `description` and the `url` of the repository and when we click on the `title` it will redirect us to the `url` of the repository.

Now, lets reload the server and go to the `localhost/home` page and you will see the `Repos Section` in the `home.html` template.

We will make some other pages but im bored doing this stuff right now. Lets style the `home.html` template.

# Frontend 

We have two pages. 
1. `home.html`
2. `about.html`

Both pages have the the navbar and The navbar is located in the `base.html` template.

Lets style our `Base.html` template.

## Styling the Navbar

