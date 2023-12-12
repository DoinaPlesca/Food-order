namespace infrastructure.Repository;

using System;
using System.Security.Cryptography;
/* hashing password use of PBKDF2 with a random salt*/

/* using parameter Iterations => refer to number of times the password
  hashing function is applied;
  SaltSize => ensures that even if two users have the same password,
  their hashed passwords will be different due to the unique salt.*/

public class PasswordHasher
{
    private const int Iterations = 10000; 
    private const int SaltSize = 16; 

    public static string HashPassword(string password)
    {
        byte[] salt;
        new RNGCryptoServiceProvider().GetBytes(salt = new byte[SaltSize]);

        using (var pbkdf2 = new Rfc2898DeriveBytes(password, salt, Iterations))
        {
            byte[] hash = pbkdf2.GetBytes(20); // 20 is the size of the hash output
            byte[] hashBytes = new byte[SaltSize + 20];
            Array.Copy(salt, 0, hashBytes, 0, SaltSize);
            Array.Copy(hash, 0, hashBytes, SaltSize, 20);
            return Convert.ToBase64String(hashBytes);
        }
    }

    public static bool VerifyPassword(string hashedPassword, string enteredPassword)
    {
        byte[] hashBytes = Convert.FromBase64String(hashedPassword);
        byte[] salt = new byte[SaltSize];
        Array.Copy(hashBytes, 0, salt, 0, SaltSize);

        using (var pbkdf2 = new Rfc2898DeriveBytes(enteredPassword, salt, Iterations))
        {
            byte[] enteredHash = pbkdf2.GetBytes(20); // 20 is the size of the hash output
            for (int i = 0; i < 20; i++)
            {
                if (hashBytes[i + SaltSize] != enteredHash[i])
                    return false;
            }
        }
        return true;
    }
}
