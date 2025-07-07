import os
import shutil

def organize_portfolio():
    # Define the target directory structure
    structure = {
        'portfolio-website': {
            '': ['index.html', 'README.md', 'todo.md'],
            'css': ['styles.css'],
            'js': ['script.js', 'translations.js'],
            'assets': {
                'images': []
            },
            'translations': []
        }
    }
    
    base_path = 'portfolio-website'
    
    # Create directories if they don't exist
    for dir_path in [base_path, 
                    os.path.join(base_path, 'css'),
                    os.path.join(base_path, 'js'),
                    os.path.join(base_path, 'assets'),
                    os.path.join(base_path, 'assets/images'),
                    os.path.join(base_path, 'translations')]:
        os.makedirs(dir_path, exist_ok=True)
    
    # Move files to their correct locations
    for root, dirs, files in os.walk(base_path):
        for file in files:
            src_path = os.path.join(root, file)
            
            # Determine where the file should go
            if file == 'index.html' or file == 'README.md' or file == 'todo.md':
                dest_path = os.path.join(base_path, file)
            elif file == 'styles.css':
                dest_path = os.path.join(base_path, 'css', file)
            elif file in ['script.js', 'translations.js']:
                dest_path = os.path.join(base_path, 'js', file)
            elif file.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.svg')):
                dest_path = os.path.join(base_path, 'assets', 'images', file)
            elif file.endswith('.json') or file.endswith('.lang'):  # Assuming translation files
                dest_path = os.path.join(base_path, 'translations', file)
            else:
                continue  # Skip files we don't know where to place
            
            # Move the file if it's not already in the right place
            if src_path != dest_path:
                shutil.move(src_path, dest_path)
                print(f'Moved: {src_path} -> {dest_path}')
    
    print("Organization complete!")

if __name__ == "__main__":
    organize_portfolio()