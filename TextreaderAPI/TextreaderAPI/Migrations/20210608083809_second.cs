using Microsoft.EntityFrameworkCore.Migrations;

namespace TextreaderAPI.Migrations
{
    public partial class second : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "fileData",
                table: "File",
                type: "varchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "fileData",
                table: "File");
        }
    }
}
