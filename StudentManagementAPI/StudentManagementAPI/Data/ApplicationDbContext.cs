using Microsoft.EntityFrameworkCore;
using StudentManagementAPI.Models;

namespace StudentManagementAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Student> Students { get; set; }
    }
}
