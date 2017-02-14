using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Amrit.Entities
{
    /// <summary>
    ///  Role
    /// </summary>
    public class Role : IEntityBase
    {
        public int ID { get; set; }
        public string Name { get; set; }
    }
}
