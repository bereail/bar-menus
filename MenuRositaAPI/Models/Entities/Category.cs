﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace MenuRositaAPI.Models;

public partial class Category
{
    public int Id { get; set; }

    public string Name { get; set; }

    public int SectionId { get; set; }

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();

    [JsonIgnore]
    public virtual Section Section { get; set; }
}