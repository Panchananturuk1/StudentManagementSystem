using Microsoft.AspNetCore.Mvc;
using StudentManagementAPI.Models;
using StudentManagementAPI.Services;

namespace StudentManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly StudentService _service;
        public StudentsController(StudentService service) { _service = service; }

        [HttpGet]
        public async Task<ActionResult<List<Student>>> GetAll() => await _service.GetAll();

        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> GetById(int id) => await _service.GetById(id);

        [HttpPost]
        public async Task<IActionResult> Add(Student student)
        {
            await _service.Add(student);
            return CreatedAtAction(nameof(GetById), new { id = student.Id }, student);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Student student)
        {
            if (id != student.Id)
            {
                return BadRequest();
            }
            await _service.Update(student);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _service.Delete(id);
            return NoContent();
        }
    }
}
