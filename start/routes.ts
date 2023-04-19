import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async ({ view }) => {
  return view.render("welcome");
});
Route.get("/lessons", "LessonsGETController.lessons").as("lessonsGET");
Route.post("/lessons", "LessonsPOSTController.lessons").as("lessonsPOST");
Route.get("/projects", "ProjectsGETController.projects").as("projectsGET");
Route.post("/projects", "ProjectsPOSTController.projects").as("projectsPOST");
