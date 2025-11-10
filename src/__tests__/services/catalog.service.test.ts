import { CatalogService } from "../../services/catalog.service";

describe("CatalogService", () => {
  describe("list()", () => {
    describe("when catalog is empty", () => {
      it("should return an empty array", () => {
        // arrange
        const c = new CatalogService();

        // act
        const catalog = c.list();
        // assert
        expect(catalog).toHaveLength(0);
        expect(catalog).toEqual([]);
      });
    });
  });
});
