using infrastructure.DataModels;
using infrastructure.QueryModels;
using infrastructure.Repository;

namespace service;

public class CategoryService
{
    private readonly CategoryRepository _categoryRepository;

    public CategoryService(CategoryRepository categoryRepository)
    {
        _categoryRepository = categoryRepository;
    }

    public IEnumerable<CategoryFeedQuery> GetAllCategories()
    {
        return _categoryRepository.GetAllCategories();
    }

    public Category CreateCategory(string name, string imageUrl)
    {
        return _categoryRepository.CreateCategory(name, imageUrl);
    }

    public Category UpdateCategory(int categoryId, string categoryName, string categoryImageUrl)
    { 
        return _categoryRepository.UpdateCategory(categoryId, categoryName, categoryImageUrl);
    }
    
    public bool DeleteCategory(int categoryId)
    {
        return _categoryRepository.DeleteCategory(categoryId);
    }

    public Category GetCategoryById(int categoryId)
    {
        return _categoryRepository.GetCategoryById(categoryId);
    }


}

