using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.RegularExpressions;


namespace TextreaderAPI.Methods
{
    public class HandlerMethod
    {
        public List<string> AllLines { get; set; }
        public string input { get; set; }

        public HandlerMethod(string _text)
        {
            input = _text;
            AllLines = new List<string>();
            string[] enders = { ".", ",", "!", "?", "_", "\\", ";" };
            string receivedText = Regex.Replace(_text, @"\\s+", " ");
            receivedText = receivedText.Replace("\"", "");
            string[] temp = receivedText.Split(" ");
            for (int i = 0; i < temp.Count(); i++)
            {
                if(temp[i] != "")
                {
                    for (int ii = 0; ii < enders.Count(); ii++)
                    {
                        if (temp[i].EndsWith(enders[ii]))
                        {
                            temp[i] = temp[i].Remove(temp[i].Length - 1);
                            break;
                        }
                    }
                    AllLines.Add(temp[i]);
                }
            }
        }

        public string TopOccurence()
        {
            Dictionary<string, int> myDictionary = new Dictionary<string, int>();

            foreach(string word in AllLines)
            {
                string w = word.Trim().ToLower();
                if(!myDictionary.ContainsKey(w))
                {
                    myDictionary.Add(w, 1);
                }
                else 
                {
                    myDictionary[w] += 1;
                }
            }
            var first = myDictionary.OrderByDescending(x => x.Value).First();
            return first.Key;
        }

        public string AddText()
        {
            string topOccurence = this.TopOccurence();
            return input.Replace(topOccurence, "foo" + topOccurence + "bar");
        }
    }
}
