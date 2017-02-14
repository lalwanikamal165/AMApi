﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Amrit.Data.Infrastructure
{
    public interface IDbFactory : IDisposable
    {
        AmritDbContext Init();
    }
}