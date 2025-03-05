# Welcome to OwlApp!

## Content:
- [Technologies](#technologies)
- [Starting](#starting)
    - [Requirements](#requirements)
    - [Installing dependencies](#installing-dependencies)
    - [Build creation](#build-creation)
- [Architecture](#architectureа)
    - [public](#public)
    - [components](#components)
    - [modules](#modules)
    - [pages](#pages)
    - [services](#services)
    - [UI](#ui)



<a name="technologies"></a>
## Technologies
The application uses `React` to create a user interface and `Material-UI` to style components.  
<a name="starting"></a>
## Starting
<a name="requirements"></a>
### Requirements
To install and run the project, you need Node JS v23+.
<a name="installing-dependencies"></a>
### Installing dependencies
To install dependencies, run the command:    
`$ npm i`
<a name="build-creation"></a>
### Build creation
To perform a production build, run the command:  
`npm run build`
<a name="start-an-application"></a>
### Start an application
To start the importer, run the command:  
`npm run start`
<a name="start-lint"></a>

<a name="architecture"></a>
## Architecture
The architecture is represented by a modular structure where the various parts of the application are separated by functionality and responsibilities. Each folder has its own purpose and contains certain types of files.

It is organized as follows:  
- **public**: there is a file in the `public` folder `index.html `, the icon for the browser tab, as well as the `api` folder containing JSON files
- **components**: this is where reusable components are located,
  which can be used in various parts of the application.
- **modules**: modules that implement specific functionality or application logic
- **pages**: separate application pages, each of which represents a separate route
- **services**: services that allow you to work with external data, API
- **UI**: basic components related to the user interface and its management
  <a name="assets"></a>
### public
В этой папке хранятся изображения и медиафайлы, которые используются в разных частях приложения.
Разбиваем по папкам с названиями в соответствии с модулями, в которых их используем.
<a name="components"></a>
### components
It contains stylized application components used more than once, which contain only the display logic. All components are independent of the higher-level modules and of each other.
Note: You need to be careful about separating the server response and the component data structure. Using the response structure of the service in a component may violate the principle of sole responsibility (SRP). It is recommended to create a separate structure for displaying the component next to the component itself.

<a name="modules"></a>
### modules
These are small independent blocks that implement one specific logic of a part of the application. The modules are independent and do not affect operation from each other.  
<a name="pages"></a>
### pages
Stores components that represent various application pages. Each component corresponds to a separate application page. Each component of the page contains logic, styles, and lower-level components necessary to display the page content.  
**CompanyPage** - Home page with company information and navigation buttons  
**LayoutPage** - the page with the template for the other pages  
**LoginPage** - the user login page with login and password fields.**Attention!** To log in, use the username and password from the test assignment:  
*email* `aleksei@example.com`  
*password* `lkJlkn8hj`  
**ProfilePage** - authorized user's profile page 
<a name="services"></a>
### services
The folder contains various services and services that provide functionality for working with external APIs,
application logic, and other aspects of the application.

<a name="ui"></a>
### UI
A folder with basic, reusable components.
These components are implemented using the `Material-UI (UI)` library.  
[link to the Material-UI documentation](https://mui.com/material-ui/getting-started/)  
Each component, when mounted, is easily configured and adapted using sx props. It is an inline stylizer that allows you to apply styles to components directly in JSX without the need to create separate CSS files or use CSS-in-JS libraries. sx allows you to set styles as objects, which is convenient for quick and easy customization of the appearance of components. This approach also helps to reduce computational costs, as styles are integrated directly into the components.  
```jsx
  <Box sx={{color: 'white', textAlign: 'center'}}>
    <Typography sx={{fontSize: '60px', mt: 5, mb: 5}}>Company Info</Typography>
  <Box >
```
