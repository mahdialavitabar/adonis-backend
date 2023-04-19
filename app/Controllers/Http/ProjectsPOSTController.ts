// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database";

export default class ProjectsController {
  public async projects({ request, response }) {
    const projects = request.body();
    try {
      await Database.table("projects").insert({ ...projects, id: projects.id });
    } catch (err) {
      response.badRequest(err.messages);
    }
  }
}
