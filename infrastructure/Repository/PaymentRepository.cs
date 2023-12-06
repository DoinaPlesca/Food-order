using Npgsql;

namespace infrastructure.Repository;

public class PaymentRepository
{
    private readonly NpgsqlDataSource _dataSource;

    public PaymentRepository(NpgsqlDataSource dataSource)
    {
        _dataSource = dataSource;
    }
}