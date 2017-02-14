using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Amrit.Data.Infrastructure
{
    public class DbFactory : Disposable, IDbFactory
    {
        AmritDbContext dbContext;

        public AmritDbContext Init()
        {
            return dbContext ?? (dbContext = new AmritDbContext());
        }

        protected override void DisposeCore()
        {
            if (dbContext != null)
                dbContext.Dispose();
        }
    }
}
