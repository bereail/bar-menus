﻿using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models.Dtos
{
    public class LoginDto
    {
        [Required(ErrorMessage = "El nombre de usuario es obligatorio.")]
        public string Username { get; set; }

        [Required(ErrorMessage = "La contraseña es obligatoria.")]
        public string Password { get; set; }
    }
}
