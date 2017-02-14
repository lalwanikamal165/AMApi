using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Amrit.Data
{
    public class AmritDbContext : DbContext
    {
        public AmritDbContext()
            : base("AmritDbContext")
        {
            Database.SetInitializer<AmritDbContext>(null);
        }

        public virtual void Commit()
        {
            base.SaveChanges();
        }
    }
}
