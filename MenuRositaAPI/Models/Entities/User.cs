﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace MenuRositaAPI.Models;

public partial class User
{
    public int Id { get; set; }

    public string Email { get; set; }

    public string Username { get; set; }

    public string Pass { get; set; }

    public bool? IsAdmin { get; set; }
}