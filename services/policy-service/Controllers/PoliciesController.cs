using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ActionConstraints;
using Microsoft.EntityFrameworkCore;
using PolicyService.Data;
using PolicyService.Models;

namespace PolicyService.Controllers;

[ApiController]
[Route("api/v1/[controller]")]
public class PoliciesController : ControllerBase
{
    private readonly AppDbContext _db;

    public PoliciesController(AppDbContext db) => _db = db;

    [HttpGet]
    public async Task<IActionResult> GetAll() => Ok(await _db.Policies.ToListAsync());

    [HttpGet("{id:guid}")]
    public async Task<IActionResult> Get(Guid id)
    {
        var p = await _db.Policies.FindAsync(id);
        return p is null ? NotFound() : Ok(p);
    }

    [HttpPost]
    public async Task<IActionResult> Create(Policy policy)
    {
        policy.CreatedAt = DateTime.UtcNow;
        policy.UpdatedAt = DateTime.UtcNow;
        _db.Policies.Add(policy);
        await _db.SaveChangesAsync();
        return CreatedAtAction(nameof(Get), new { id = policy.PolicyId }, policy);
    }

    [HttpPut("{id:guid}")]
    public async Task<IActionResult> Update(Guid id, Policy updatedPolicy)
    {
        var existingPolicy = await _db.Policies.FindAsync(id);
        if (existingPolicy is null) return NotFound();

        existingPolicy.Title = updatedPolicy.Title;
        existingPolicy.Description = updatedPolicy.Description;
        existingPolicy.OwnerId = updatedPolicy.OwnerId;
        existingPolicy.ReviewCycleDays = updatedPolicy.ReviewCycleDays;
        existingPolicy.Status = updatedPolicy.Status;
        existingPolicy.UpdatedAt = DateTime.UtcNow;

        await _db.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        var policy = await _db.Policies.FindAsync(id);
        if (policy is null) return NotFound();

        _db.Policies.Remove(policy);
        await _db.SaveChangesAsync();
        return NoContent();
    }   
}