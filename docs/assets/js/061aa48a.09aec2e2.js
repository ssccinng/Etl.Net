"use strict";(self.webpackChunketlnetdocumentation=self.webpackChunketlnetdocumentation||[]).push([[5343],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},N={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},M=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),M=u(t),d=r,g=M["".concat(l,".").concat(d)]||M[d]||N[d]||i;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=M;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}M.displayName="MDXCreateElement"},9287:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>N,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const i={sidebar_position:6},o="Execute, Track & Check",s={unversionedId:"tutorials/trackAndCheck",id:"tutorials/trackAndCheck",title:"Execute, Track & Check",description:"TrackCheck",source:"@site/docs/tutorials/3-trackAndCheck.md",sourceDirName:"tutorials",slug:"/tutorials/trackAndCheck",permalink:"/Etl.Net/docs/tutorials/trackAndCheck",draft:!1,editUrl:"https://github.com/paillave/Etl.Net/blob/develop/documentation/docs/tutorials/3-trackAndCheck.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"ETL process",permalink:"/Etl.Net/docs/tutorials/defineProcess"},next:{title:"Make a custom operator",permalink:"/Etl.Net/docs/tutorials/customOperator"}},l={},u=[{value:"Get the estimated execution plan",id:"get-the-estimated-execution-plan",level:2},{value:"Check the result",id:"check-the-result",level:2},{value:"Get the error if it occurs",id:"get-the-error-if-it-occurs",level:2},{value:"Trace everything that goes through nodes",id:"trace-everything-that-goes-through-nodes",level:2},{value:"Catch main events to save them in a log file",id:"catch-main-events-to-save-them-in-a-log-file",level:2},{value:"Full source code at this stage",id:"full-source-code-at-this-stage",level:2}],c={toc:u};function N(e){let{components:n,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"execute-track--check"},"Execute, Track & Check"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"TrackCheck",src:t(6156).Z,width:"636",height:"300"})),(0,r.kt)("p",null,"ETL.NET can show what will happen, what happens, and what happened under the hood in details."),(0,r.kt)("h2",{id:"get-the-estimated-execution-plan"},"Get the estimated execution plan"),(0,r.kt)("p",null,"We will get the estimated execution plan with ",(0,r.kt)("inlineCode",{parentName:"p"},"GetDefinitionStructure")," method of the runner:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"var processRunner = StreamProcessRunner.Create<string>(DefineProcess);\nvar structure = processRunner.GetDefinitionStructure();\n")),(0,r.kt)("p",null,"The method will return the list of nodes that are composing the ETL process, and all the links between them."),(0,r.kt)("p",null,"For each node, an information regarding to possible performance and memory impact is given: ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," = low and ",(0,r.kt)("inlineCode",{parentName:"p"},"3")," = heavy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "StreamToNodeLinks": [\n    {\n      "InputName": "Stream",\n      "TargetNodeName": "extract files from zip",\n      "SourceNodeName": "list all required files"\n    },\n    {\n      "InputName": "Stream",\n      "TargetNodeName": "parse file",\n      "SourceNodeName": "extract files from zip"\n    },\n    {\n      "InputName": "InputStream",\n      "TargetNodeName": "exclude duplicates based on the Email",\n      "SourceNodeName": "parse file"\n    },\n    {\n      "InputName": "SourceStream",\n      "TargetNodeName": "upsert using Email as key and ignore the Id",\n      "SourceNodeName": "exclude duplicates based on the Email"\n    },\n    {\n      "InputName": "Stream",\n      "TargetNodeName": "define row to report",\n      "SourceNodeName": "upsert using Email as key and ignore the Id"\n    },\n    {\n      "InputName": "MainStream",\n      "TargetNodeName": "write summary to file",\n      "SourceNodeName": "define row to report"\n    },\n    {\n      "InputName": "Stream",\n      "TargetNodeName": "save log file",\n      "SourceNodeName": "write summary to file"\n    }\n  ],\n  "Nodes": [\n    {\n      "NodeName": "-ProcessRunner-",\n      "TypeName": "-ProcessRunner-",\n      "PerformanceImpact": 1,\n      "MemoryFootPrint": 1,\n      "IsRootNode": false\n    },\n    {\n      "NodeName": "list all required files",\n      "TypeName": "Cross apply FileSystemValuesProvider`2",\n      "PerformanceImpact": 3,\n      "MemoryFootPrint": 2,\n      "IsRootNode": false\n    },\n    {\n      "NodeName": "extract files from zip",\n      "TypeName": "Cross apply UnzipFileProcessorValuesProvider",\n      "PerformanceImpact": 2,\n      "MemoryFootPrint": 2,\n      "IsRootNode": false\n    },\n    {\n      "NodeName": "parse file",\n      "TypeName": "Cross apply FlatFileValuesProvider`2",\n      "PerformanceImpact": 3,\n      "MemoryFootPrint": 1,\n      "IsRootNode": false\n    },\n    {\n      "NodeName": "exclude duplicates based on the Email",\n      "TypeName": "Distinct",\n      "PerformanceImpact": 1,\n      "MemoryFootPrint": 3,\n      "IsRootNode": false\n    },\n    {\n      "NodeName": "upsert using Email as key and ignore the Id",\n      "TypeName": "SqlServerSave",\n      "PerformanceImpact": 3,\n      "MemoryFootPrint": 1,\n      "IsRootNode": false\n    },\n    {\n      "NodeName": "define row to report",\n      "TypeName": "Select",\n      "PerformanceImpact": 1,\n      "MemoryFootPrint": 1,\n      "IsRootNode": false\n    },\n    {\n      "NodeName": "write summary to file",\n      "TypeName": "ToFileValue",\n      "PerformanceImpact": 2,\n      "MemoryFootPrint": 1,\n      "IsRootNode": false\n    },\n    {\n      "NodeName": "save log file",\n      "TypeName": "WriteToFile",\n      "PerformanceImpact": 3,\n      "MemoryFootPrint": 3,\n      "IsRootNode": false\n    }\n  ],\n  "PerformanceImpact": 2,\n  "MemoryFootPrint": 2\n}\n')),(0,r.kt)("p",null,"It is possible to visualize it with a sankey diagram (by default, will work only if a debugger is attached to the current process):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"var processRunner = StreamProcessRunner.Create<string>(DefineProcess);\nvar structure = processRunner.GetDefinitionStructure();\nstructure.OpenEstimatedExecutionPlan();\n")),(0,r.kt)("p",null,"The diagram will be shown in the web browser:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"estimatedExPlan",src:t(1978).Z,width:"508",height:"774"})),(0,r.kt)("p",null,"The chart looks pretty simple and straight forward, but it can be very useful when lot of nodes are interacting."),(0,r.kt)("h2",{id:"check-the-result"},"Check the result"),(0,r.kt)("p",null,"Once a ETL process has completed, we can get more details than its success or failure. Getting the amount of rows issued by each node can be very useful."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'var res = await processRunner.ExecuteAsync(args[0], executionOptions);\nConsole.Write(res.Failed ? "Failed" : "Succeeded");\nvar counters = res.StreamStatisticCounters;\nvar estimatedExecutionPlan = res.JobDefinitionStructure;\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"estimatedExecutionPlan")," will be exactly the same than ",(0,r.kt)("inlineCode",{parentName:"p"},"processRunner.GetDefinitionStructure()"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"counters")," will contain the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "Counter": 1,\n    "SourceNodeName": "-ProcessRunner-"\n  },\n  {\n    "Counter": 2,\n    "SourceNodeName": "list all required files"\n  },\n  {\n    "Counter": 9,\n    "SourceNodeName": "extract files from zip"\n  },\n  {\n    "Counter": 45,\n    "SourceNodeName": "parse file"\n  },\n  {\n    "Counter": 45,\n    "SourceNodeName": "exclude duplicates based on the Email"\n  },\n  {\n    "Counter": 45,\n    "SourceNodeName": "upsert using Email as key and ignore the Id"\n  },\n  {\n    "Counter": 45,\n    "SourceNodeName": "define row to report"\n  },\n  {\n    "Counter": 1,\n    "SourceNodeName": "write summary to file"\n  },\n  {\n    "Counter": 1,\n    "SourceNodeName": "save log file"\n  }\n]\n')),(0,r.kt)("p",null,"It is also possible to show the Sankey diagram with ribbons that have the width depending on the count of rows that were issued by the originating node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'var res = await processRunner.ExecuteAsync(args[0], executionOptions);\nConsole.Write(res.Failed ? "Failed" : "Succeeded");\nres.OpenActualExecutionPlan();\n')),(0,r.kt)("p",null,"The diagram will be shown in the web browser:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"actualExecutionPlan",src:t(8612).Z,width:"520",height:"757"})),(0,r.kt)("h2",{id:"get-the-error-if-it-occurs"},"Get the error if it occurs"),(0,r.kt)("p",null,"When an error occurred during the execution process (",(0,r.kt)("inlineCode",{parentName:"p"},"ExecutionStatus.Failed")," return by method ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecuteAsync"),") the property ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecutionStatus.ErrorTraceEvent")," informs where and what happened:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'if (res.Failed)\n    Console.Write($"{res.ErrorTraceEvent.NodeName}({res.ErrorTraceEvent.NodeTypeName}):{res.ErrorTraceEvent.Content.Message}");\n')),(0,r.kt)("h2",{id:"trace-everything-that-goes-through-nodes"},"Trace everything that goes through nodes"),(0,r.kt)("p",null,"Before triggering the execution of the ETL process listen the event ",(0,r.kt)("inlineCode",{parentName:"p"},"DebugNodeStream")," of the process runner."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"var processRunner = StreamProcessRunner.Create<string>(DefineProcess);\nprocessRunner.DebugNodeStream += (sender, e) => { };\n")),(0,r.kt)("p",null,"The event args ",(0,r.kt)("inlineCode",{parentName:"p"},"e")," contains a chunk of values (max 1000 values per chunks) in the property ",(0,r.kt)("inlineCode",{parentName:"p"},"TraceContents"),", and the name of the node that emitted it in the property ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeName"),"."),(0,r.kt)("p",null,"Placing a breakpoint in the event handler permits to see all the values that are processes within the ETL. Applying the following condition on the breakpoint will show only chunks of data issued by the node that parses csv files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'e.NodeName == "parse file"\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"trackValues",src:t(8700).Z,width:"1034",height:"619"})),(0,r.kt)("h2",{id:"catch-main-events-to-save-them-in-a-log-file"},"Catch main events to save them in a log file"),(0,r.kt)("p",null,"We will track each end of nodes, raised errors and save it in a log file in the current directory."),(0,r.kt)("p",null,"For this, we must make an ETL process dedicated to handle traces:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'private static void DefineTraceProcess(IStream<TraceEvent> traceStream, ISingleStream<string> contentStream)\n{\n    traceStream\n        .Where("keep only summary of node and errors", i => i.Content is CounterSummaryStreamTraceContent || i.Content is UnhandledExceptionStreamTraceContent)\n        .Select("create log entry", i => new\n        {\n            DateTime = DateTime.Now,\n            Type = i.Content switch\n            {\n                CounterSummaryStreamTraceContent => "EndOfNode",\n                UnhandledExceptionStreamTraceContent => "Error",\n                _ => "Unknown"\n            },\n            Message = i.Content switch\n            {\n                CounterSummaryStreamTraceContent counterSummary => $"{i.NodeName}: {counterSummary.Counter}",\n                UnhandledExceptionStreamTraceContent unhandledException => $"{i.NodeName}({unhandledException.Type}): [{unhandledException.Level.ToString()}] {unhandledException.Message}",\n                _ => "Unknown"\n            }\n        })\n        .ToTextFileValue("write log file", "log.csv", FlatFileDefinition.Create(i => new\n        {\n            DateTime = i.ToDateColumn("datetime", "yyyy-MM-dd hh:mm:ss:ffff"),\n            Type = i.ToColumn("event type"),\n            Message = i.ToColumn("details"),\n        }).IsColumnSeparated(\',\'))\n        .WriteToFile("save log file", i => i.Name);\n}\n')),(0,r.kt)("p",null,"Then we must provide this specific ETL process when executing the process by setting it in ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecutionOptions"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"var executionOptions = new ExecutionOptions<string>\n{\n    Resolver = new SimpleDependencyResolver().Register(cnx),\n    TraceProcessDefinition = DefineTraceProcess\n};\n")),(0,r.kt)("p",null,"The output file will contain the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv",metastring:'title="log.csv"',title:'"log.csv"'},"datetime,event type,details\n2021-07-15 12:26:39:7094,EndOfNode,-ProcessRunner-: 1\n2021-07-15 12:26:39:7425,EndOfNode,list all required files: 2\n2021-07-15 12:26:39:8204,EndOfNode,extract files from zip: 9\n2021-07-15 12:26:40:2900,EndOfNode,parse file: 45\n2021-07-15 12:26:40:2900,EndOfNode,exclude duplicates: 45\n2021-07-15 12:26:40:2901,EndOfNode,save in DB: 45\n2021-07-15 12:26:40:2901,EndOfNode,display ids on console: 45\n")),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If, for some reasons, actual values that are being issued by some nodes are needed to be accessed, ",(0,r.kt)("inlineCode",{parentName:"p"},"UseDetailedTraces")," must be flagged in options that are transmitted to ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecuteAsync"),". To catch the content, ",(0,r.kt)("inlineCode",{parentName:"p"},"RowProcessStreamTraceContent")," must be included in the trace ETL process."),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"UseDetailedTraces"),"  is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," by default for performance purposes."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"var executionOptions = new ExecutionOptions<string>\n{\n    Resolver = new SimpleDependencyResolver().Register(cnx),\n    TraceProcessDefinition = DefineTraceProcess,\n    UseDetailedTraces = true\n};\n")))),(0,r.kt)("h2",{id:"full-source-code-at-this-stage"},"Full source code at this stage"),(0,r.kt)("p",null,"This piece of program is a typical process to make a reliable upsert of the content of every zipped csv file in a folder, with process summary and error logging... Ready to deploy in production! \ud83c\udf7e \ud83c\udf7a \ud83c\udf78 \ud83e\udd42 \ud83c\udf7b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="Program.cs"',title:'"Program.cs"'},'using System;\nusing System.Threading.Tasks;\nusing Paillave.Etl.Core;\nusing Paillave.Etl.FileSystem;\nusing Paillave.Etl.Zip;\nusing Paillave.Etl.TextFile;\nusing Paillave.Etl.SqlServer;\nusing System.Data.SqlClient;\n\nnamespace SimpleTutorial\n{\n    class Program\n    {\n        static async Task Main(string[] args)\n        {\n            var processRunner = StreamProcessRunner.Create<string>(DefineProcess);\n            processRunner.DebugNodeStream += (sender, e) => { };\n            using (var cnx = new SqlConnection(args[1]))\n            {\n                cnx.Open();\n                var executionOptions = new ExecutionOptions<string>\n                {\n                    Resolver = new SimpleDependencyResolver().Register(cnx),\n                    TraceProcessDefinition = DefineTraceProcess\n                };\n                var res = await processRunner.ExecuteAsync(args[0], executionOptions);\n                Console.Write(res.Failed ? "Failed" : "Succeeded");\n                if (res.Failed)\n                    Console.Write($"{res.ErrorTraceEvent.NodeName}({res.ErrorTraceEvent.NodeTypeName}):{res.ErrorTraceEvent.Content.Message}");\n            }\n        }\n        private class Person\n        {\n            public int Id { get; set; }\n            public string Email { get; set; }\n            public string FirstName { get; set; }\n            public string LastName { get; set; }\n            public DateTime DateOfBirth { get; set; }\n            public int? Reputation { get; set; }\n        }\n        private static void DefineProcess(ISingleStream<string> contextStream)\n        {\n            contextStream\n                .CrossApplyFolderFiles("list all required files", "*.zip", true)\n                .CrossApplyZipFiles("extract files from zip", "*.csv")\n                .CrossApplyTextFile("parse file", \n                    FlatFileDefinition.Create(i => new Person\n                    {\n                        Email = i.ToColumn("email"),\n                        FirstName = i.ToColumn("first name"),\n                        LastName = i.ToColumn("last name"),\n                        DateOfBirth = i.ToDateColumn("date of birth", "yyyy-MM-dd"),\n                        Reputation = i.ToNumberColumn<int?>("reputation", ".")\n                    }).IsColumnSeparated(\',\'))\n                .Distinct("exclude duplicates based on the Email", i => i.Email)\n                .SqlServerSave("upsert using Email as key and ignore the Id", o => o\n                    .ToTable("dbo.Person")\n                    .SeekOn(p => p.Email)\n                    .DoNotSave(p => p.Id))\n                .Select("define row to report", i => new { i.Email, i.Id })\n                .ToTextFileValue("write summary to file", \n                    "report.csv", \n                    FlatFileDefinition.Create(i => new\n                    {\n                        Email = i.ToColumn("Email"),\n                        Id = i.ToNumberColumn<int>("new or existing Id", ".")\n                    }).IsColumnSeparated(\',\'))\n                .WriteToFile("save log file", i => i.Name);\n        }\n        private static void DefineTraceProcess(IStream<TraceEvent> traceStream, ISingleStream<string> contentStream)\n        {\n            traceStream\n                .Where("keep only summary of node and errors", i => i.Content is CounterSummaryStreamTraceContent || i.Content is UnhandledExceptionStreamTraceContent)\n                .Select("create log entry", i => new\n                {\n                    DateTime = DateTime.Now,\n                    Type = i.Content switch\n                    {\n                        CounterSummaryStreamTraceContent => "EndOfNode",\n                        UnhandledExceptionStreamTraceContent => "Error",\n                        _ => "Unknown"\n                    },\n                    Message = i.Content switch\n                    {\n                        CounterSummaryStreamTraceContent counterSummary => $"{i.NodeName}: {counterSummary.Counter}",\n                        UnhandledExceptionStreamTraceContent unhandledException => $"{i.NodeName}({i.NodeTypeName}): [{unhandledException.Level.ToString()}] {unhandledException.Message}",\n                        _ => "Unknown"\n                    }\n                })\n                .ToTextFileValue("write log file", "log.csv", FlatFileDefinition.Create(i => new\n                {\n                    DateTime = i.ToDateColumn("datetime", "yyyy-MM-dd hh:mm:ss:ffff"),\n                    Type = i.ToColumn("event type"),\n                    Message = i.ToColumn("details"),\n                }).IsColumnSeparated(\',\'))\n                .WriteToFile("save log file", i => i.Name);\n        }\n    }\n}\n')))}N.isMDXComponent=!0},6156:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iNjM2IiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDYzNiAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTMyMC4yMSAyNDEuOUMzNjkuOTgyIDI0MS45IDQxMC4zMyAyMDEuNTUyIDQxMC4zMyAxNTEuNzhDNDEwLjMzIDEwMi4wMDggMzY5Ljk4MiA2MS42NiAzMjAuMjEgNjEuNjZDMjcwLjQzOCA2MS42NiAyMzAuMDkgMTAyLjAwOCAyMzAuMDkgMTUxLjc4QzIzMC4wOSAyMDEuNTUyIDI3MC40MzggMjQxLjkgMzIwLjIxIDI0MS45WiIgZmlsbD0iIzNFOEVFRCIvPgogIDxwYXRoIGQ9Ik0xNTkuMzQgOTMuNzZDMTIzLjUzIDkzLjc2IDk0LjM5OTkgMTIyLjg5IDk0LjM5OTkgMTU4LjdDOTQuMzk5OSAxOTQuNTEgMTIzLjUzIDIyMy42NCAxNTkuMzQgMjIzLjY0QzE5NS4xNSAyMjMuNjQgMjI0LjI4IDE5NC41MSAyMjQuMjggMTU4LjdDMjI0LjI4IDEyMi45IDE5NS4xNSA5My43NiAxNTkuMzQgOTMuNzZaIiBmaWxsPSIjM0U4RUVEIi8+CiAgPHBhdGggZD0iTTQ4MS4xMyA5NC4xOEM0NDUuMzIgOTQuMTggNDE2LjE5IDEyMy4zMSA0MTYuMTkgMTU5LjEyQzQxNi4xOSAxOTQuOTMgNDQ1LjMyIDIyNC4wNiA0ODEuMTMgMjI0LjA2QzUxNi45NCAyMjQuMDYgNTQ2LjA3IDE5NC45MyA1NDYuMDcgMTU5LjEyQzU0Ni4wNyAxMjMuMzEgNTE2Ljk0IDk0LjE4IDQ4MS4xMyA5NC4xOFoiIGZpbGw9IiMzRThFRUQiLz4KICA8cGF0aCBkPSJNMjc2LjYyIDE2NC42QzI3NS40MyAxNjAuNTMgMjc0Ljc3IDE1Ni4yMyAyNzQuNzcgMTUxLjc4QzI3NC43NyAxMjYuNjggMjk1LjEyIDEwNi4zNCAzMjAuMjEgMTA2LjM0QzM0NS4zMSAxMDYuMzQgMzY1LjY1IDEyNi42OSAzNjUuNjUgMTUxLjc4QzM2NS42NSAxNTYuMTUgMzY1LjAyIDE2MC4zNiAzNjMuODcgMTY0LjM2TDM4NC4xNiAxNzAuODdDMzg1Ljk3IDE2NC44MiAzODYuOTUgMTU4LjQxIDM4Ni45NSAxNTEuNzhDMzg2Ljk1IDExNC45MiAzNTcuMDcgODUuMDQgMzIwLjIxIDg1LjA0QzI4My4zNSA4NS4wNCAyNTMuNDcgMTE0LjkyIDI1My40NyAxNTEuNzhDMjUzLjQ3IDE1OC40NCAyNTQuNDYgMTY0Ljg3IDI1Ni4yNyAxNzAuOTRMMjc2LjYyIDE2NC42WiIgZmlsbD0iI0QxQzVGNCIvPgogIDxwYXRoIGQ9Ik0zNjIuNTUgMTM1LjI3QzM2NC41NSAxNDAuMzkgMzY1LjY2IDE0NS45NSAzNjUuNjYgMTUxLjc4QzM2NS42NiAxNTYuMTUgMzY1LjAzIDE2MC4zNiAzNjMuODggMTY0LjM2TDM4NC4xNyAxNzAuODdDMzg1Ljk4IDE2NC44MiAzODYuOTYgMTU4LjQxIDM4Ni45NiAxNTEuNzhDMzg2Ljk2IDE0My4yMiAzODUuMzMgMTM1LjA1IDM4Mi40IDEyNy41M0wzNjIuNTUgMTM1LjI3WiIgZmlsbD0id2hpdGUiLz4KICA8cGF0aCBkPSJNMTI5LjU1IDE2Ny42OUMxMjguNzQgMTY0LjkxIDEyOC4yOSAxNjEuOTggMTI4LjI5IDE1OC45NEMxMjguMjkgMTQxLjgyIDE0Mi4xNyAxMjcuOTQgMTU5LjI5IDEyNy45NEMxNzYuNDEgMTI3Ljk0IDE5MC4yOSAxNDEuODIgMTkwLjI5IDE1OC45NEMxOTAuMjkgMTYxLjkyIDE4OS44NiAxNjQuNzkgMTg5LjA4IDE2Ny41MkwyMDIuOTIgMTcxLjk2QzIwNC4xNSAxNjcuODMgMjA0LjgyIDE2My40NiAyMDQuODIgMTU4LjkzQzIwNC44MiAxMzMuNzkgMTg0LjQ0IDExMy40IDE1OS4yOSAxMTMuNEMxMzQuMTUgMTEzLjQgMTEzLjc2IDEzMy43OCAxMTMuNzYgMTU4LjkzQzExMy43NiAxNjMuNDcgMTE0LjQzIDE2Ny44NiAxMTUuNjcgMTcyTDEyOS41NSAxNjcuNjlaIiBmaWxsPSJ3aGl0ZSIvPgogIDxwYXRoIGQ9Ik0xMzIuNDUgMTQzLjQ4TDEyMC4yMSAxMzUuNTlDMTE2LjEyIDE0Mi40MiAxMTMuNzYgMTUwLjQxIDExMy43NiAxNTguOTVDMTEzLjc2IDE2My40OSAxMTQuNDMgMTY3Ljg4IDExNS42NyAxNzIuMDJMMTI5LjU1IDE2Ny43QzEyOC43NCAxNjQuOTIgMTI4LjI5IDE2MS45OSAxMjguMjkgMTU4Ljk1QzEyOC4yOSAxNTMuMyAxMjkuODIgMTQ4LjAzIDEzMi40NSAxNDMuNDhaIiBmaWxsPSIjQTNDOUY2Ii8+CiAgPHBhdGggZD0iTTEyMi41MiAxNDcuMzdDMTIyLjUyIDE0Ny4zNyAxMzYuNTYgMTU2LjIxIDE1My4xNCAxNjYuMzdDMTU2LjU3IDE2OC42MyAxNjEuMjkgMTY5LjE4IDE2NC45MSAxNjYuNTlDMTY5LjM1IDE2My40MiAxNzAuMzYgMTU3LjIyIDE2Ny4xNiAxNTIuNzVDMTY1LjM1IDE1MC4yMiAxNjIuNiAxNDguNzkgMTU5LjczIDE0OC41OUMxNTkuNjMgMTQ4LjU3IDE1NS44NyAxNDguNDkgMTU1Ljc3IDE0OC40OUMxNTIuMjIgMTQ4LjQyIDEyMi41MiAxNDcuMzcgMTIyLjUyIDE0Ny4zN1oiIGZpbGw9IiMwMDY0REEiLz4KICA8cGF0aCBkPSJNMTYyLjczIDE1NS45MUMxNjEuMyAxNTMuOSAxNTguNTIgMTUzLjQzIDE1Ni41MyAxNTQuODZDMTU0LjU0IDE1Ni4yOCAxNTQuMDkgMTU5LjA2IDE1NS41MiAxNjEuMDdDMTU2Ljk1IDE2My4wOCAxNTkuNzMgMTYzLjU1IDE2MS43MiAxNjIuMTJDMTYzLjcxIDE2MC43IDE2NC4xNiAxNTcuOTIgMTYyLjczIDE1NS45MVoiIGZpbGw9IiMzRThFRUQiLz4KICA8cGF0aCBkPSJNNDUxLjMzIDE2Ny42OUM0NTAuNTEgMTY0LjkxIDQ1MC4wNyAxNjEuOTggNDUwLjA3IDE1OC45NEM0NTAuMDcgMTQxLjgyIDQ2My45NSAxMjcuOTQgNDgxLjA3IDEyNy45NEM0OTguMTkgMTI3Ljk0IDUxMi4wNyAxNDEuODIgNTEyLjA3IDE1OC45NEM1MTIuMDcgMTYxLjkyIDUxMS42NCAxNjQuNzkgNTEwLjg2IDE2Ny41Mkw1MjQuNyAxNzEuOTZDNTI1LjkzIDE2Ny44MyA1MjYuNiAxNjMuNDYgNTI2LjYgMTU4LjkzQzUyNi42IDEzMy43OSA1MDYuMjIgMTEzLjQgNDgxLjA3IDExMy40QzQ1NS45MyAxMTMuNCA0MzUuNTQgMTMzLjc4IDQzNS41NCAxNTguOTNDNDM1LjU0IDE2My40NyA0MzYuMjEgMTY3Ljg2IDQzNy40NSAxNzJMNDUxLjMzIDE2Ny42OVoiIGZpbGw9IndoaXRlIi8+CiAgPHBhdGggZD0iTTQ1NC4yMyAxNDMuNDhMNDQxLjk5IDEzNS41OUM0MzcuOSAxNDIuNDIgNDM1LjU0IDE1MC40MSA0MzUuNTQgMTU4Ljk1QzQzNS41NCAxNjMuNDkgNDM2LjIxIDE2Ny44OCA0MzcuNDUgMTcyLjAyTDQ1MS4zMyAxNjcuN0M0NTAuNTIgMTY0LjkyIDQ1MC4wNyAxNjEuOTkgNDUwLjA3IDE1OC45NUM0NTAuMDcgMTUzLjMgNDUxLjYgMTQ4LjAzIDQ1NC4yMyAxNDMuNDhaIiBmaWxsPSIjQTNDOUY2Ii8+CiAgPHBhdGggZD0iTTQ0NC4xNiAxNDcuMzVDNDQ0LjE2IDE0Ny4zNSA0NjAuMDMgMTU2LjU0IDQ3NC45MiAxNjYuMzdDNDc4LjI5IDE2OC45NiA0ODMuMDcgMTY5LjE4IDQ4Ni42OSAxNjYuNTlDNDkxLjEzIDE2My40MiA0OTIuMTQgMTU3LjIyIDQ4OC45NCAxNTIuNzVDNDg3LjEzIDE1MC4yMiA0ODQuMzggMTQ4Ljc5IDQ4MS41MSAxNDguNTlDNDgxLjQxIDE0OC41NyA0ODEuMzIgMTQ4LjU1IDQ4MS4yMSAxNDguNTVDNDc3LjY2IDE0OC40NyA0NDQuMTYgMTQ3LjM1IDQ0NC4xNiAxNDcuMzVaIiBmaWxsPSIjMDA2NERBIi8+CiAgPHBhdGggZD0iTTQ4NC41MSAxNTUuOTFDNDgzLjA4IDE1My45IDQ4MC4zIDE1My40MyA0NzguMzEgMTU0Ljg2QzQ3Ni4zMiAxNTYuMjggNDc1Ljg3IDE1OS4wNiA0NzcuMyAxNjEuMDdDNDc4LjczIDE2My4wOCA0ODEuNTEgMTYzLjU1IDQ4My41IDE2Mi4xMkM0ODUuNDkgMTYwLjcgNDg1Ljk0IDE1Ny45MiA0ODQuNTEgMTU1LjkxWiIgZmlsbD0iIzNFOEVFRCIvPgogIDxwYXRoIGQ9Ik0zNjUuMzcgMTE1LjQ4QzM2NS4zNyAxMTUuNDggMzQyLjg4IDEyNC44OCAzMTUuNjggMTM2LjE5QzMwOS41NiAxMzguMDYgMzA1LjExIDE0My43MSAzMDUuMTEgMTUwLjRDMzA1LjExIDE1OC42MSAzMTEuODEgMTY1LjI3IDMyMC4wOCAxNjUuMjdDMzI0Ljc2IDE2NS4yNyAzMjguOTIgMTYzLjE1IDMzMS42OCAxNTkuODFDMzMxLjc5IDE1OS43IDMzMS45IDE1OS42MSAzMzEuOTkgMTU5LjQ4QzM0NC4xMSAxNDUuMzIgMzY1LjM3IDExNS40OCAzNjUuMzcgMTE1LjQ4WiIgZmlsbD0iIzUyMkNENSIvPgogIDxwYXRoIGQ9Ik0zMjAuMDkgMTU3LjA4QzMyMy44IDE1Ny4wOCAzMjYuODEgMTU0LjA5IDMyNi44MSAxNTAuNDFDMzI2LjgxIDE0Ni43MiAzMjMuOCAxNDMuNzQgMzIwLjA5IDE0My43NEMzMTYuMzggMTQzLjc0IDMxMy4zNyAxNDYuNzMgMzEzLjM3IDE1MC40MUMzMTMuMzcgMTU0LjA5IDMxNi4zOCAxNTcuMDggMzIwLjA5IDE1Ny4wOFoiIGZpbGw9IiM5NTdFRTYiLz4KPC9zdmc+"},8612:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/actualExecutionPlan-766ca19efb5492122de040f64d1f337b.png"},1978:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/estimatedExPlan-e1bbdf021eb7011635825d822e49f928.png"},8700:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/trackValues-e9d49f8dd10adc86ecaef50ede09152a.png"}}]);