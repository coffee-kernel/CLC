using System.ComponentModel.DataAnnotations;

namespace PolicyService.Models
{
    public class Policy
    {
        [Key]
        public Guid PolicyId { get; set; } = Guid.NewGuid();
        [Required]
        public string Title { get; set; } = default!;
        public string? Description { get; set; }
        public string? OwnerId { get; set; }
        public int ReviewCycleDays { get; set; } = 365;
        public string Status { get; set; } = "Active";
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}