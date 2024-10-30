using Microsoft.EntityFrameworkCore;
using PaymentsSystemAPI.Models;

namespace PaymentsSystemAPI.DataContext
{
    public class PaymentContext: DbContext
    {
        public PaymentContext(DbContextOptions options) : base(options) { }
       public DbSet<PaymentDetail> paymentDetails { get; set; }
    }
}
