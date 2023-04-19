// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database";

export default class LessonsController {
  public async lessons({ request, response }) {
    const lessons = request.body();
    try {
      await Database.table("lessons").insert({ ...lessons, id: lessons.id });
    } catch (err) {
      response.badRequest(err.messages);
    }
  }
}
