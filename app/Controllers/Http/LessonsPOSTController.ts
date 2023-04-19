// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Database from "@ioc:Adonis/Lucid/Database";

export default class ProjectsController {
  public async lessons({ request, response }: HttpContextContract) {
    const lessons = request.body();
    const name = request.only(["name"]);

    // Check if a project with the same purpose already exists
    const existingProject = await Database.from("lessons")
      .where("name", name.name)
      .first();

    if (existingProject) {
      return response
        .status(400)
        .json({ error: "A project with this purpose already exists" });
    } else {
      // Insert the new project into the database
      try {
        await Database.table("lessons").insert({
          ...lessons,
          id: lessons.id,
        });
        return response
          .status(200)
          .json({ message: "Project added successfully" });
      } catch (err) {
        response.badRequest(err.messages);
      }
    }
  }
}
