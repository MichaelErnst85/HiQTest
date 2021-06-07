using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TextreaderAPI.Models;

namespace TextreaderAPI.Data
{
    public class TextreaderAPIContext : DbContext
    {
        public TextreaderAPIContext(DbContextOptions<TextreaderAPIContext> options)
            : base(options)
        {
        }
        public DbSet<File> File { get; set; }


        protected override void OnModelCreating(ModelBuilder model)
        {
            base.OnModelCreating(model);
            model.Entity<File>(
                m =>
                {
                    m.HasKey(f => f.id);
                    m.Property(f => f.fileName).HasColumnType("varchar(200)");
                });

            
        }

    }
}
