using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace StudentManagementAPI.Models
{
    public class Student
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] // Auto-increment primary key
        public int Id { get; set; }
        public string Name { get; set; } = "";
        public int Age { get; set; }
        public string Email { get; set; } = "";
        public string Course { get; set; } = "";
    }
}
