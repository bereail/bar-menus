﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace MenuRositaAPI.Models;

public partial class Section
{
    public int Id { get; set; }

    public string Name { get; set; }

    public virtual ICollection<Category> Categories { get; set; } = new List<Category>();
}