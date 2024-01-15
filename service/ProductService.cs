using infrastructure.DataModels;
using infrastructure.QueryModels;
using infrastructure.Repository;

namespace service;

public class ProductService
{
    
    private readonly ProductRepository _productRepository;
    public ProductService(ProductRepository productRepository)
    {
        _productRepository = productRepository;
    }

    public IEnumerable<ProductFeedQuery> GetAllProducts()
    {
        return _productRepository.GetAllProducts();
    }

    public Product CreateProduct(string name, string description, decimal price, int quantity,
        string imageUrl, int categoryId)
    {
        return _productRepository.CreateProduct(name, description, price, quantity, imageUrl,categoryId);
    }

    public Product GetProductById(int id)
    {
        return _productRepository.GetProductById(id);
    }

    public Product UpdateProduct(int id, string name, string description, decimal price, int quantity,
        string imageUrl, int categoryId)
    {
        return _productRepository.UpdateProduct(id, name, description, price, quantity, imageUrl,categoryId);
    }

    public IEnumerable<ProductFeedQuery> GetProductsByCategory(int categoryId)
    {
        return _productRepository.GetProductsByCategory(categoryId);
    }

    public bool DeleteProduct(int id)
    {
        return _productRepository.DeleteProduct(id);
    }
    
    public void AddProductToCategory(int productId, int categoryId)
    {
        _productRepository.AddProductToCategory(productId, categoryId);
    }


}
