using Npgsql;

namespace infrastructure.Repository;

public class ReservationRepository
{
    private readonly NpgsqlDataSource _dataSource;

    public ReservationRepository(NpgsqlDataSource dataSource)
    {
        _dataSource = dataSource;
    }
}