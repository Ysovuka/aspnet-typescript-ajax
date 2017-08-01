using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.models
{
    public class Item
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Value { get; set; }
    }
}
