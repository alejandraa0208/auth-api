class Collection {
  constructor(model) {
    this.model = model;
  }
  
  async create(data) {
    return this.model.create(data);
  }

  async read() {
    return this.model.findAll();
  }

  async update(id, data) {
    const [updated] = await this.model.update(data, {
      where: { id },
      returning: true,
    });
    if (!updated) throw new Error('Record not found');
    return updated[1][0];
  }

  async delete(id) {
    const deleted = await this.model.destroy({
      where: { id },
    });
    if (!deleted) throw new Error('Record not found');
    return deleted;
  }
}
  
module.exports = Collection;