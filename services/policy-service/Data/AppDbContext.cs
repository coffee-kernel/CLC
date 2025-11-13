using Microsoft.EntityFrameworkCore;
using PolicyService.Models;

namespace PolicyService.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Policy> Policies { get; set; }
    }
}   