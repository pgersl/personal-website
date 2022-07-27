#AUTHOR: Petr Geršl (pgersl)
#NAME: syntax-editor
#CREDIT: vcerny01/rmdc




#imports

import re
import os
import argparse

#global vars

italic_pattern = re.compile("__(.*?)__")
bold_italic_pattern = re.compile("\*\*_(.*?)_\*\*")

#defs

def parse_args():
    """Define arguments"""
    parser = argparse.ArgumentParser(description="Edit wrong markdown syntax.")
    parser.add_argument("-d", "--dir", type=str, help="Directory of files to be edited", default=".")
    parser.add_argument("-e", "--exclude", type=str, help="Files to be excluded", nargs="+", default=[])
    return parser.parse_args()

def scan_dir(directory):
    """Create a list of files in directory"""
    try:
        os.listdir(directory)
    except FileNotFoundError:
        print(f"Directory '{directory}' doesn't exist! Skipping...")
        return
    return os.listdir(directory)

def edit_syntax(content: str):
    """Edit syntax"""
    italics = re.findall(italic_pattern, content)
    for italic in italics:
        full_italic = "__" + italic + "__"
        content = content.replace(full_italic, "_" + italic + "_")
    bold_italics = re.findall(bold_italic_pattern, content)
    for bold_italic in bold_italics:
        full_bold_italic = "**_" + bold_italic + "_**"
        content = content.replace(full_bold_italic, "**" + bold_italic + "**")
    return content

#main

def main():
    args = parse_args()
    print("Following files will be excluded: ")
    for item in args.exclude:
        print(f"- {item}")
    
    files = scan_dir(args.dir)
    files = [x for x in files if x not in args.exclude]
    
    for filename in files:
        with open(os.path.join(args.dir, filename), "r+") as file:
            content = edit_syntax(file.read())
            file.seek(0)
            file.write(content)

if __name__ == "__main__":
    main()

#end