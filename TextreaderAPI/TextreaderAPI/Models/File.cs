using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TextreaderAPI.Models
{
    
    public class File
    {
        [Key]
        public int id { get; set; }
        [Column(TypeName = "varchar(200)")]
        public string fileName { get; set; }


    }
}
