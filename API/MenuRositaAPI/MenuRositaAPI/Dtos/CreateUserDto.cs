﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Dtos
{
    public class CreateUserDto
    {

        public string Username { get; set; }

        public string Email { get; set; }

        public string Pass { get; set; }

        public bool IsAdmin { get; set; }
    }
}
