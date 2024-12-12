using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Dtos.Credentials
{
    public class NewPasswordRequestDto
    {
        [Required(ErrorMessage = "Password is Required.")]
        [StringLength(50, MinimumLength = 8, ErrorMessage = "Password must be at least 8 characters, or shorter than 50 characters.")]
        public string Password { get; set; }

        [Required(ErrorMessage = "Password Confirmation is Required.")]
        [Compare(nameof(Password), ErrorMessage = "Passwords do not match.")]
        public string ConfirmPassword { get; set; }
    }
}