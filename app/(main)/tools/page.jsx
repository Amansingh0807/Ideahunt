"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export const dynamic = "force-dynamic";

const toolsData = [
  {
    category: "🧠 Code Editors & IDEs",
    tools: [
      { name: "JetBrains IntelliJ IDEA Ultimate", description: "Advanced IDE for Java and other languages.", link: "https://www.jetbrains.com/idea/" },
      { name: "WebStorm", description: "IDE for JavaScript, TypeScript, React, etc.", link: "https://www.jetbrains.com/webstorm/" },
      { name: "Rider", description: "IDE for .NET development.", link: "https://www.jetbrains.com/rider/" },
      { name: "Sublime Text", description: "Lightweight editor with a one-time license fee.", link: "https://www.sublimetext.com/" },
      { name: "UltraEdit", description: "Fast, powerful text editor for handling large files.", link: "https://www.ultraedit.com/" },
    ],
  },
  {
    category: "☁️ Cloud & Deployment",
    tools: [
      { name: "GitHub Copilot (Pro/Enterprise)", description: "AI pair programmer (requires GitHub subscription).", link: "https://github.com/features/copilot" },
      { name: "AWS (Amazon Web Services)", description: "Pay-as-you-go pricing for cloud infrastructure.", link: "https://aws.amazon.com/" },
      { name: "Microsoft Azure", description: "Cloud services for app development, hosting, databases, etc.", link: "https://azure.microsoft.com/" },
      { name: "DigitalOcean", description: "Cloud VPS hosting, scalable apps.", link: "https://www.digitalocean.com/" },
    ],
  },
  {
    category: "🛠️ DevOps & CI/CD",
    tools: [
      { name: "CircleCI (Paid Tiers)", description: "CI/CD automation.", link: "https://circleci.com/" },
      { name: "GitLab Premium", description: "Enhanced features over the free tier.", link: "https://about.gitlab.com/pricing/" },
      { name: "Travis CI (Paid)", description: "CI/CD pipeline for GitHub projects.", link: "https://travis-ci.com/" },
      { name: "Bitbucket Pipelines (Standard/Premium)", description: "DevOps tool integrated with Bitbucket.", link: "https://bitbucket.org/product/pricing" },
    ],
  },
  {
    category: "📦 Project Management & Collaboration",
    tools: [
      { name: "Jira Software", description: "Agile project management.", link: "https://www.atlassian.com/software/jira" },
      { name: "Confluence", description: "Team documentation.", link: "https://www.atlassian.com/software/confluence" },
      { name: "Trello (Premium)", description: "Kanban board with automation and integrations.", link: "https://trello.com/pricing" },
      { name: "Asana (Business/Premium)", description: "Project planning with timelines and reporting.", link: "https://asana.com/pricing" },
    ],
  },
  {
    category: "🔒 Security & Testing",
    tools: [
      { name: "Snyk", description: "Vulnerability scanning for code, containers, and dependencies.", link: "https://snyk.io/" },
      { name: "SonarQube (Developer Edition+)", description: "Static code analysis for code quality.", link: "https://www.sonarsource.com/products/sonarqube/" },
      { name: "Postman (Professional/Enterprise)", description: "API testing and collaboration.", link: "https://www.postman.com/pricing/" },
      { name: "Burp Suite Professional", description: "Web app security testing.", link: "https://portswigger.net/burp" },
    ],
  },
  {
    category: "🧪 Design & Prototyping",
    tools: [
      { name: "Figma (Professional/Organization)", description: "UI/UX design and prototyping.", link: "https://www.figma.com/" },
      { name: "Adobe XD", description: "UI/UX design (Part of Creative Cloud).", link: "https://www.adobe.com/products/xd.html" },
      { name: "Sketch", description: "Mac-based UI design tool.", link: "https://www.sketch.com/" },
    ],
  },
  {
    category: "📊 Analytics & Monitoring",
    tools: [
      { name: "Datadog", description: "Infrastructure monitoring and analytics.", link: "https://www.datadoghq.com/" },
      { name: "New Relic", description: "Application performance monitoring (APM).", link: "https://newrelic.com/" },
      { name: "LogRocket", description: "Frontend session recording and performance monitoring.", link: "https://logrocket.com/" },
    ],
  },
  {
    category: "📊 Financial Planning & Analysis (FP&A)",
    tools: [
      { name: "Anaplan", description: "Enterprise-level planning and modeling.", link: "https://www.anaplan.com/" },
      { name: "Adaptive Insights (Workday)", description: "Budgeting, forecasting, and analytics.", link: "https://www.workday.com/" },
      { name: "Vena Solutions", description: "FP&A platform integrating with Excel.", link: "https://www.venasolutions.com/" },
      { name: "Oracle Hyperion", description: "Comprehensive performance management suite.", link: "https://www.oracle.com/performance-management/" },
      { name: "Planful", description: "Cloud-based planning and financial close solution.", link: "https://planful.com/" },
    ],
  },
  {
    category: "📈 Investment & Trading",
    tools: [
      { name: "Bloomberg Terminal", description: "Professional trading, analytics, and financial news.", link: "https://www.bloomberg.com/professional/solution/bloomberg-terminal/" },
      { name: "Morningstar Direct", description: "Investment research and portfolio analysis.", link: "https://www.morningstar.com/products/direct" },
      { name: "MetaTrader 5", description: "Forex and stock trading platform.", link: "https://www.metatrader5.com/" },
      { name: "TradingView (Pro/Pro+/Premium)", description: "Market charts and analysis.", link: "https://www.tradingview.com/" },
      { name: "YCharts", description: "Advanced charting and stock analysis for investors.", link: "https://ycharts.com/" },
    ],
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen mt-12 bg-gray-100 dark:bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Tools Marketplace
        </h1>
        {toolsData.map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              {category.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.tools.map((tool, idx) => (
                <Card key={idx} className="p-6 bg-white dark:bg-gray-800 shadow-md dark:shadow-lg">
                  <CardContent className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {tool.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {tool.description}
                    </p>
                    <Button
                      as="a"
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-400 hover:bg-green-600 text-white"
                    >
                      Buy Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}