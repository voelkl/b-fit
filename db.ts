import { Database } from 'bun:sqlite';

type WeightEvent = {
  id?: number;
  weight: number;
  date: string;
};

export class EventsDatabase {
  private db: Database;

  constructor() {
      this.db = new Database('b-fit.db');
      // Initialize the database
      this.init()
          .then(() => console.log('Database initialized'))
          .catch(console.error);
  }

  // Initialize the database
  async init() {
      return this.db.run('CREATE TABLE IF NOT EXISTS events (id INTEGER PRIMARY KEY AUTOINCREMENT, weight VARCHAR, date TEXT)');
  }

  async getEvents() {
    return this.db.query('SELECT * FROM events').all();
  }

  // Add a event
  async addEvent(event: WeightEvent) {
      return this.db.query(`INSERT INTO events (weight, date) VALUES (?, ?) RETURNING id`).get(event.weight, event.date);
  }

  // Update a event
  async updateEvent(id: number, event: WeightEvent) {
      return this.db.run(`UPDATE events SET weight = ${event.weight}, date = '${event.date}' WHERE id = ${id}`)
  }

  // Delete a event
  async deleteEvent(id: number) {
      return this.db.run(`DELETE FROM events WHERE id = ${id}`)
  }
}
