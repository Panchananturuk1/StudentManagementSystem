using Microsoft.EntityFrameworkCore;
using StudentManagementAPI.Data;
using StudentManagementAPI.Models;

namespace StudentManagementAPI.Services
{
    public class StudentService
    {
        private readonly ApplicationDbContext _context;
        public StudentService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<Student>> GetAll() => await _context.Students.ToListAsync();
        public async Task<Student> GetById(int id) => await _context.Students.FindAsync(id);

        public async Task Add(Student student)
        {
            _context.Students.Add(student);
            await _context.SaveChangesAsync();
        }
        public async Task Update(Student student)
        {
            _context.Entry(student).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task Delete(int id)
        {
            var student = await _context.Students.FindAsync(id);
            if (student != null)
            {
                _context.Students.Remove(student);
                await _context.SaveChangesAsync();
            }
        }
    }
}
